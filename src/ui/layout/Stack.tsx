import type { ReactNode } from "react";
import { spacing } from "../styles";

type StackProps = {
  children: ReactNode;
  gap: keyof typeof spacing;
};

export const Stack = ({ children, gap }: StackProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: spacing[gap] }}
    >
      {children}
    </div>
  );
};
