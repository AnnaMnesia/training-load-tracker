import { Stack } from "../../../ui/layout/Stack";
import { Card } from "../../../ui/surfaces/Card";
import { useWeeklyLoad } from "../../sessions/hooks/useWeeklyLoad";
import { useSessions } from "../hooks/useSessions";
import { typography } from "../../../ui/styles/typography";
import { StatusBadge } from "../../../ui/StatusBadge";
import { Divider } from "../../../ui/layout/Divider";
import { StatusGuidance } from "../../../ui/StatusGuidance";

export const WeeklyLoadCard = () => {
  const { sessions } = useSessions();
  const { weeklyLoad, status } = useWeeklyLoad(sessions);
  return (
    <Card>
      <Stack gap="md">
        <span
          style={{
            ...typography.title,
          }}
        >
          Weekly Load
        </span>
        <Divider />
        <Stack gap="sm" align="center">
          <span style={{ ...typography.largeTitle }}>{weeklyLoad}</span>
          <StatusBadge
            status={status}
            style={{
              fontSize: typography.body.fontSize,
            }}
          >
            Load
          </StatusBadge>
        </Stack>
        <Divider />

        <StatusGuidance status={status} />
      </Stack>
    </Card>
  );
};
