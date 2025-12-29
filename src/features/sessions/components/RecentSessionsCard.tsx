import { Stack } from "../../../ui/layout/Stack";
import { Card } from "../../../ui/surfaces/Card";
import { useWeeklyLoad } from "../../sessions/hooks/useWeeklyLoad";
import { useSessions } from "../hooks/useSessions";
import { Divider } from "../../../ui/layout/Divider";
import { SessionRow } from "../../../ui/layout/SessionRow";
import { typography } from "../../../ui/styles";

export const RecentSessionsCard = () => {
  const { sessions } = useSessions();
  const { status } = useWeeklyLoad(sessions);
  return (
    <Card>
      <Stack gap="md">
        <span
          style={{
            ...typography.title,
          }}
        >
          Recent Sessions
        </span>
        <Divider />
        {sessions.map((session) => (
          <Stack key={session.id} gap="sm">
            <SessionRow
              key={session.id}
              type={session.type}
              date={session.date}
              load={session.load}
              status={status}
            />
            <Divider />
          </Stack>
        ))}
      </Stack>
    </Card>
  );
};
