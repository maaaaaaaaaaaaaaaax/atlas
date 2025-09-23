import React from "react";
import { HighlightedPink } from "./highlighted-pink";

export type HighlightedProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export function Repetition({ children, fullWidth = false }: HighlightedProps) {
  if (fullWidth) {
    return (
      <div
        className="font-uncut text-[20px] my-40"
        style={{ columnSpan: "all" }}
      >
        <HighlightedPink>{children}</HighlightedPink>
      </div>
    );
  }

  return (
    <div className="font-uncut text-[20px] my-40">
      <HighlightedPink>{children}</HighlightedPink>
    </div>
  );
}
