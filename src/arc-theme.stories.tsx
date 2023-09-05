import React from "react";
import { useArcTheme } from ".";

export default {
  title: "Arc Theme",
};

export const ArcTheme = () => {
  const { arcTheme } = useArcTheme();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "monospace",
          marginBottom: "32px",
        }}
      >
        Arc Theme Color Palette
      </h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: arcTheme.primary,
            borderRadius: "100%",
            marginRight: "32px",
          }}
        ></div>
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: arcTheme.tertiary,
            borderRadius: "100%",
            marginRight: "32px",
          }}
        ></div>
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: arcTheme.background,
            borderRadius: "100%",
            marginRight: "32px",
          }}
        ></div>
        <div
          style={{
            width: "64px",
            height: "64px",
            backgroundColor: arcTheme.secondary,
            borderRadius: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};
