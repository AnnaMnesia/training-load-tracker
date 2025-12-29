import { colors } from "./styles/colors";
import { spacing } from "./styles/spacing";
import { radius } from "./styles/radius";

type Status = "green" | "orange" | "red" | "nutural";

type StatusBadgeProps = {
  status: Status;
  padding?: keyof typeof spacing;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const STATUS_LABEL: Record<Status, string> = {
  green: "Optimal",
  orange: "Moderate",
  red: "High",
  nutural: "Rest",
};

const STATUS_STYLES: Record<Status, { text: string; background: string }> = {
  green: {
    text: colors.light.textPrimary,
    background: colors.light.success,
  },
  orange: {
    text: colors.light.textPrimary,
    background: colors.light.warning,
  },
  red: {
    text: colors.light.textPrimary,
    background: colors.light.danger,
  },
  nutural: {
    text: colors.light.textPrimary,
    background: colors.light.primaryBackground,
  },
};

export const StatusBadge = ({
  children,
  status,
  style,
}: //  padding = "sm",
StatusBadgeProps) => {
  const { background } = STATUS_STYLES[status];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "object-fit",
        padding: "8px 24px",
        borderRadius: radius.xxl,
        backgroundColor: background,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {STATUS_LABEL[status]} {children}
    </span>
  );
};
