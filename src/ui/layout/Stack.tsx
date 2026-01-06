import type { ReactNode } from "react";
import { spacing } from "../styles";

type StackProps = {
  children: ReactNode;
  gap: keyof typeof spacing;
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
};

export const Stack = ({ children, gap = "md", align = "stretch" }: StackProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: spacing[gap], alignItems: align }}
    >
      {children}
    </div>
  );
};
