import { Volume2, VolumeX } from "lucide-react";

export function AudioButton({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Mute background music" : "Play background music"}
      aria-pressed={playing}
      className="glass-chip fixed bottom-5 right-4 z-40 grid h-12 w-12 place-items-center transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      {playing ? (
        <Volume2 className="h-5 w-5 text-accent-pink" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      )}
    </button>
  );
}