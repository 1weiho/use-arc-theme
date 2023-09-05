import { ArcColors } from "./type";

const useArcTheme = () => {
  const primary = "var(--arc-palette-foregroundPrimary)";
  const secondary = "var(--arc-palette-foregroundSecondary)";
  const tertiary = "var(--arc-palette-foregroundTertiary)";
  const background = "var(--arc-palette-background)";
  const backgroundExtra = "var(--arc-palette-backgroundExtra)";
  const backgroundSimple = "var(--arc-background-simple-color)";
  const backgroundGradientStart = "var(--arc-background-gradient-color0)";
  const backgroundGradientEnd = "var(--arc-background-gradient-color1)";
  const bakcgroundGradientOverlayStart =
    "var(--arc-background-gradient-overlay-color0)";
  const backgroundGradientOverlayEnd =
    "var(--arc-background-gradient-overlay-color1)";
  const maxContrast = "var(--arc-palette-maxContrastColor)";
  const minContrast = "var(--arc-palette-minContrastColor)";
  const focus = "var(--arc-palette-focus)";
  const hover = "var(--arc-palette-hover)";
  const cutout = "var(--arc-palette-cutoutColor)";
  const title = "var(--arc-palette-title)";
  const subtitle = "var(--arc-palette-subtitle)";

  const arcTheme: ArcColors = {
    primary,
    secondary,
    tertiary,
    background,
    backgroundExtra,
    backgroundSimple,
    backgroundGradientStart,
    backgroundGradientEnd,
    bakcgroundGradientOverlayStart,
    backgroundGradientOverlayEnd,
    maxContrast,
    minContrast,
    focus,
    hover,
    cutout,
    title,
    subtitle,
  };

  return {
    arcTheme,
  };
};

export { useArcTheme };
