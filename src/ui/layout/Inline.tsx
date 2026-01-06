// 🧠 Responsibilities of Inline
// Inline does only:
// 1️⃣ Horizontal layout
// 2️⃣ Spacing between children
// 3️⃣ Alignment (center by default)
import type { ReactNode } from "react";
import { spacing } from "../styles";

type InlineProps = {
  children: ReactNode;
  gap: keyof typeof spacing;
  align?: "start" | "center" | "end";
};

export const Inline = ({
  children,
  gap = "md",
  align = "center",
}: InlineProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: spacing[gap],
        alignItems:
          align === "start"
            ? "flex-start"
            : align === "end"
            ? "flex-end"
            : "center",
      }}
    >
      {children}
    </div>
  );
};
