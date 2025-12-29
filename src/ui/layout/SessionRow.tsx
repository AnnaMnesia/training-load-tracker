import { StatusBadge } from "../StatusBadge";
import { typography } from "../styles";
import { Inline } from "./Inline";
import { Stack } from "./Stack";
import { colors } from "../styles/colors";

type SessionRowProps = {
  type: "run" | "strength" | "swim";
  date: string; // ISO date string
  load: number;
  status: "green" | "orange" | "red";
};

const TYPE_EMOJI: Record<SessionRowProps["type"], string> = {
  run: "🏃‍♂️",
  strength: "🏋️‍♀️",
  swim: "🏊‍♂️",
};

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const formatDay = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date(date));

export const SessionRow = ({ type, date, load, status }: SessionRowProps) => {
  return (
    <Inline gap="md" align="center">
      <span style={{ ...typography.headline }}>{TYPE_EMOJI[type]}</span>
      <Stack gap="xs">
        <span
          style={{
            ...typography.headline,
            fontWeight: typography.headline.emphasizedWeight,
          }}
        >
          {capitalize(type)}
        </span>
        <span style={{ ...typography.footnote, color: colors.light.textMuted }}>
          {formatDay(date)}
        </span>
      </Stack>

      <Inline gap="xs">
        <StatusBadge status={status}></StatusBadge>
        <Inline gap="xs">
          <span
            style={{
              ...typography.headline,
              fontWeight: typography.headline.emphasizedWeight,
            }}
          >
            {load}
          </span>
          <span>Load</span>
        </Inline>
      </Inline>
    </Inline>
  );
};
