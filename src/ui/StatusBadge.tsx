import { colors } from "./styles/colors";
import { radius } from "./styles/radius";
import React from "react";

type Status = "green" | "orange" | "red";
type Variant = "weekly" | "session";

type StatusBadgeProps = {
  status: Status;
  variant?: Variant;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const STATUS_LABEL: Record<Status, string> = {
  green: "Optimal",
  orange: "Moderate",
  red: "High",
};

const STATUS_STYLES: Record<Status, { background: string; color?: string }> = {
  green: { background: colors.light.success, color: colors.light.textPrimary },
  orange: { background: colors.light.warning, color: colors.light.textButton },
  red: { background: colors.light.danger, color: colors.light.textButton },
};

const VARIANT_STYLES: Record<
  Variant,
  {
    padding: string;
    fontSize: number;
  }
> = {
  weekly: {
    padding: "10px 25px",
    fontSize: 17,
  },
  session: {
    padding: "6px 12px",
    fontSize: 13,
  },
};

export const StatusBadge = ({
  status,
  variant = "session",
  children,
  style,
}: StatusBadgeProps) => {
  const { background } = STATUS_STYLES[status];
  const { padding, fontSize } = VARIANT_STYLES[variant];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        fontSize,
        borderRadius: radius.xxl,
        backgroundColor: background,
        color: STATUS_STYLES[status].color || undefined,
        whiteSpace: "nowrap",
        lineHeight: 1,
        ...style,
      }}
    >
      {STATUS_LABEL[status]}
      {children ? ` ${children}` : null}
    </span>
  );
};
