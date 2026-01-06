import { Stack } from "../../../ui/layout/Stack";
import { Card } from "../../../ui/surfaces/Card";
import { Divider } from "../../../ui/layout/Divider";
import { SessionRow } from "../../../ui/layout/SessionRow";
import { typography } from "../../../ui/styles";
import type { TrainingSession } from "../../../types/session";
import { getSessionStatus } from "../utils/getSessionStatus";

type RecentSessionsCardProps = {
  sessions: TrainingSession[];
};

export const RecentSessionsCard = ({ sessions }: RecentSessionsCardProps) => {
  return (
    <Card>
      <div style={{ height: "100%" }}>
        <span style={{ ...typography.title }}>Recent Sessions</span>

        <Divider />

        {/* Scroll container */}
        <div
          style={{
            maxHeight: "320px", // adjust to fit ~5 SessionRows
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {sessions.map((session) => (
            <Stack key={session.id} gap="sm">
              <SessionRow
                type={session.type}
                date={session.date}
                load={session.load}
                status={getSessionStatus(session.load)}
              />
              <Divider />
            </Stack>
          ))}
        </div>
      </div>
    </Card>
  );
};
