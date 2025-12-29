import type { ReactNode } from "react";
import { colors, spacing, radius, shadows } from "../styles";

type CardProps = {
  children?: ReactNode;
  padding?: keyof typeof spacing;
};

export const Card = ({ children, padding = "xl" }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: colors.light.surface,
        padding: spacing[padding],
        borderRadius: radius.xl,
        boxShadow: shadows.md,
      }}
    >
      {children}
    </div>
  );
};
