import type { ReactNode } from "react";
import { colors, spacing, typography } from "../styles";

type AppShellProps = {
  children?: ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.light.background,
        color: colors.light.textPrimary,
        fontFamily: typography.fontFamily,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: spacing.lg,
        }}
      >
        {children}
      </div>
    </div>
  );
};
