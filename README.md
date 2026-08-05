# Samri's Birthday Chronicle

Create a highly interactive, modern multi-slide birthday tribute web application based on a dark-mode, glassmorphism design aesthetic. Follow the exact structure, layout flow, and component breakdown below:

1. Overall Aesthetics & Theme:

Theme: Dark elegant UI background (#0F0F12 to #16161D gradient) with vibrant pink/gold/purple accents and soft glowing effects (box-shadow / backdrop-filter: blur).

Global Background Effects: Continuous falling confetti particle dynamic animation across all slides, paired with floating tilted Polaroid memory photo frames static on the canvas overlay.

Navigation UI: Top progress dots dynamic pagination indicator matching current slide step, along with smooth Left/Right slide transition arrows.

2. Slide Breakdown & Experience Flow:

Slide 1: Landing Envelope / Gift Box Cover

Center a 3D-styled dark grid gift box sealed with a vibrant glossy pink ribbon and bow.

Subtitle below ribbon: "TO: samri | FROM: kirubel" with a subtle pulsating "^ TAP TO OPEN" prompt text.

Slide 2: Welcome Splash & Fireworks

Header text "HAPPY BIRTHDAY!" with a bold colorful gradient main heading "samri".

Background burst of animated fireworks/sparkles.

A modern glowing pill button labeled "Continue →".

Slide 3: Birthday Wish Hero Card

Center a stylized 3D/Emoji Birthday Cake element above the date tag "August 11, 2026".

Elegant typography quote/wish text centered in italic script with author credit at the bottom.

Slide 4: Glassmorphism Info Cards ("What I love most about you")

Interactive dark translucent card with a heart icon header "What I love most about you".

Expand/fullscreen toggle button at top-right of the card container.

Slide 5: Timeline Story Slide ("Our Story")

Glassmorphism card featuring a book icon header "Our Story" with formatted step-by-step text layout (a -> b -> c...).

Slide 6: Shared Dreams & Wishes

Glassmorphism card featuring a sparkle icon header "Shared Dreams".

Slide 7: Interactive Dual Gallery Grid ("Our Memories")

Top badge showing camera icon with counter "Our Memories - 10 photos".

Side-by-side rounded image cards (grayscale on left, full-color on right) with caption text at the bottom.

Pill button below: "Open +8 photos" to trigger full gallery modal.

Slide 8: Single Polaroid Spotlight ("Moments")

Header: "Moments 1/9" with micro progress bar below it.

Focused polaroid frame card centered with subtle float hover transition and bottom caption block.

Slide 9: Closing Chapter Slide ("Our Chapter")

Modern card containing date indicator icon, title "Our Chapter", and "SPECIAL DATE: August 11, 2026".

3. Technical Requirements:

Fully responsive for both desktop screen view and mobile viewports.

Smooth CSS transitions and keyframe animations for all state changes (card slide-ins, fade-ins, float animations

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://holo-gift-moment.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/18db2b49-f534-468f-93b0-268d982135c9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
