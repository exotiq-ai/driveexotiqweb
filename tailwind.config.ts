import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ============================================================
        // BRAND SYSTEM v1 — "Black is the room. Gold is the jewelry.
        // Blue is the engine." Obsidian foundation (~85% of screen),
        // gold as a precious accent (~10% cap), gulf-blue as the
        // sparing "engine on" performance signal + bridge to exotiq.ai.
        // ============================================================

        // Obsidian / neutral ramp — cinematic black, never pure #000
        obsidian: {
          50: "#F4F6F9", 100: "#D9DDE4", 200: "#B4BBC6", 300: "#838B98",
          400: "#5A616E", 500: "#3A3F49", 600: "#2B2F37", 700: "#202329",
          800: "#17191F", 850: "#121317", 900: "#0C0D10", 950: "#070708",
        },
        // Gold ramp — champagne → antique. The jewelry.
        gold: {
          50: "#FBF6EC", 100: "#F4E8CE", 200: "#EAD6A6", 300: "#DEC07A",
          400: "#D2AC57", 500: "#C39A3D", 600: "#A67F2E", 700: "#856326",
          800: "#5E471D", 900: "#3D2F15", 950: "#241C0D",
        },
        // Gulf Blue ramp — McLaren energy. The engine. (Note: deeper than
        // the legacy gulf-blue #6EC1E4; this is a deliberate re-hex.)
        gulf: {
          50: "#E8F6FB", 100: "#C5E9F5", 200: "#92D6ED", 300: "#5BBFE2",
          400: "#27A6D6", 500: "#1690C4", 600: "#0F74A3", 700: "#0D5B80",
          800: "#0B445F", 900: "#0A2F41", 950: "#06202C",
        },
        success: "#3FB57A",
        warn: "#E0A93C",
        error: "#E5544B",

        // ---- Legacy tokens (kept temporarily for incremental migration;
        //      re-pointed to the new palette so nothing reads as pure #000/#FFF) ----
        "gulf-blue": "#6EC1E4",
        "performance-orange": "#F15A29",
        "deep-black": "#070708",
        "jet-grey": "#17191F",
        "pure-white": "#F4F6F9",
        "metallic-silver": "#B4BBC6",
        "graphite": "#3A3F49",
        "midnight-blue": "#0A1929",
      },
      fontFamily: {
        // Wired via next/font CSS variables in app/layout.tsx.
        // Display ships as Space Grotesk (Clash Display swap-in later).
        display: ['var(--font-display)', '"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['var(--font-sans)', "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ['var(--font-mono)', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "tight-exotiq": "-0.02em",
        "wide-exotiq": "0.20em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        content: "1200px",
        prose: "72ch",
      },
      spacing: {
        xs: "8px", sm: "16px", md: "24px", lg: "32px", xl: "48px",
        "2xl": "64px", "3xl": "96px", "4xl": "128px",
        section: "clamp(5rem, 12vh, 11rem)",
      },
      borderRadius: {
        sm: "4px", md: "8px", lg: "16px", xl: "24px", "2xl": "32px",
      },
      boxShadow: {
        "elev-1": "0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.8)",
        "elev-2": "0 1px 0 rgba(255,255,255,0.06) inset, 0 16px 48px -16px rgba(0,0,0,0.85)",
        "elev-gold": "0 0 0 1px rgba(210,172,87,0.35), 0 12px 40px -12px rgba(195,154,61,0.25)",
        "elev-blue": "0 0 24px -4px rgba(39,166,214,0.55)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#EAD6A6 0%,#C39A3D 45%,#856326 100%)",
        "gold-hairline": "linear-gradient(90deg,transparent,rgba(210,172,87,0.5) 50%,transparent)",
        vignette: "radial-gradient(120% 90% at 50% 30%,transparent 55%,rgba(0,0,0,0.55) 100%)",
        "scrim-bottom": "linear-gradient(to top,rgba(7,7,8,0.92) 0%,rgba(7,7,8,0.55) 35%,transparent 70%)",
        "scrim-top": "linear-gradient(to bottom,rgba(7,7,8,0.85),transparent 22%)",
        "spotlight-gold": "radial-gradient(50% 50% at 50% 50%,rgba(195,154,61,0.16),transparent)",
        "spotlight-blue": "radial-gradient(50% 50% at 50% 50%,rgba(39,166,214,0.16),transparent)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16,1,0.3,1)",
        drive: "cubic-bezier(0.65,0,0.35,1)",
        exit: "cubic-bezier(0.4,0,1,1)",
      },
      transitionDuration: {
        250: "250ms",
        600: "600ms",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-2%,1%)" },
        },
        "pulse-live": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        // legacy (kept so existing components don't break)
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        grain: "grain 8s steps(6) infinite",
        "pulse-live": "pulse-live 2s ease-in-out infinite",
        "ken-burns": "kenBurns 25s ease-out forwards",
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem,8vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.75rem,5.5vw,4.5rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem,4vw,3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        data: ["clamp(1.5rem,3vw,2.5rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.22em" }],
      },
    },
  },
  plugins: [],
};
export default config;
