import type { ReactNode } from "react";
import { colors, spacing, radius, shadows } from "../styles";

type CardProps = {
  children?: ReactNode;
  padding?: keyof typeof spacing;
};

export const Card = ({ children, padding = "md" }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: colors.light.surface,
        padding: spacing[padding],
        borderRadius: radius.lg,
        boxShadow: shadows.md,
      }}
    >
      {children}
    </div>
  );
};
