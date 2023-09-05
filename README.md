![Github Cover](https://github.com/davidho0403/arc-theme/assets/75478661/7201da40-8bde-42d3-80dc-a4711cbd57ea)

## Introduction

`useArcTheme()` is a React hook to get Arc browser theme's color.

## Installation

To get started with arc-theme, you need to install it into your project using npm:

```bash
npm i arc-theme
```

## Usage

Once arc-theme is installed, you can use the Arc browser theme's colors in your project. Here's an example of how to do it:

```jsx
import React from "react";
import { useArcTheme } from "arc-theme";

export const Page = () => {
  const { background, title } = useArcTheme();

  return (
    <div style={{ backgroundColor: background }}>
      <h1 style={{ color: title }}>Hello Arc Theme</h1>
    </div>
  );
};
```

## Support Colors

- primary
- secondary
- tertiary
- background
- backgroundExtra
- backgroundSimple
- backgroundGradientStart
- backgroundGradientEnd
- bakcgroundGradientOverlayStart
- backgroundGradientOverlayEnd
- maxContrast
- minContrast
- focus
- hover
- cutout
- title
- subtitle
