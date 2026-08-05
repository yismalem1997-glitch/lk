import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A soft, celebratory ambient music bed synthesized with the Web Audio API.
 * No external audio file is needed, and the context is only created after a
 * user gesture so browser autoplay policies are respected.
 */

// Gentle major-9 arpeggio (A major-ish), looping with a slow pad underneath.
const MELODY = [440, 554.37, 659.25, 830.61, 987.77, 830.61, 659.25, 554.37];
const PAD = [110, 164.81, 220];
const STEP = 0.42; // seconds per note

export function useAmbientMusic() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef(0);
  const nextTimeRef = useRef(0);

  const ensureContext = useCallback(() => {
    if (ctxRef.current) return ctxRef.current;
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    const ctx = new Ctor();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Warm pad drone
    PAD.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = 0.05 / (i + 1);
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.08 + i * 0.03;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.02;
      lfo.connect(lfoGain).connect(g.gain);
      osc.connect(g).connect(master);
      osc.start();
      lfo.start();
    });

    ctxRef.current = ctx;
    gainRef.current = master;
    nextTimeRef.current = ctx.currentTime;
    return ctx;
  }, []);

  const scheduler = useCallback(() => {
    const ctx = ctxRef.current;
    const master = gainRef.current;
    if (!ctx || !master) return;

    while (nextTimeRef.current < ctx.currentTime + 0.6) {
      const t = nextTimeRef.current;
      const freq = MELODY[stepRef.current % MELODY.length]!;

      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = freq;

      const env = ctx.createGain();
      env.gain.setValueAtTime(0.0001, t);
      env.gain.exponentialRampToValueAtTime(0.16, t + 0.05);
      env.gain.exponentialRampToValueAtTime(0.0001, t + STEP * 2.4);

      osc.connect(env).connect(master);
      osc.start(t);
      osc.stop(t + STEP * 2.6);

      stepRef.current += 1;
      nextTimeRef.current = t + STEP;
    }
  }, []);

  const play = useCallback(() => {
    const ctx = ensureContext();
    if (!ctx || !gainRef.current) return;
    void ctx.resume();
    if (nextTimeRef.current < ctx.currentTime) nextTimeRef.current = ctx.currentTime + 0.05;
    gainRef.current.gain.cancelScheduledValues(ctx.currentTime);
    gainRef.current.gain.setTargetAtTime(0.5, ctx.currentTime, 1.2);
    if (timerRef.current === null) {
      timerRef.current = window.setInterval(scheduler, 200);
      scheduler();
    }
    setPlaying(true);
  }, [ensureContext, scheduler]);

  const pause = useCallback(() => {
    const ctx = ctxRef.current;
    if (ctx && gainRef.current) {
      gainRef.current.gain.cancelScheduledValues(ctx.currentTime);
      gainRef.current.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
    }
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (playing) pause();
    else play();
  }, [pause, play, playing]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      void ctxRef.current?.close();
    };
  }, []);

  return { playing, play, pause, toggle };
}