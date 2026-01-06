import { Card } from "../../../ui/surfaces/Card";
import { useWeeklyLoad } from "../../sessions/hooks/useWeeklyLoad";
import { typography } from "../../../ui/styles/typography";
import { StatusBadge } from "../../../ui/StatusBadge";
import { Divider } from "../../../ui/layout/Divider";
import { StatusGuidance } from "../../../ui/StatusGuidance";
import type { TrainingSession } from "../../../types/session";

type WeeklyLoadCardProps = {
  sessions: TrainingSession[];
};

export const WeeklyLoadCard = ({ sessions }: WeeklyLoadCardProps) => {
  const { weeklyLoad, status } = useWeeklyLoad(sessions);
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <span
            style={{
              ...typography.title,
            }}
          >
            Weekly Load
          </span>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flex: 3,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span style={{ ...typography.largeTitle }}>{weeklyLoad}</span>
          <StatusBadge
            status={status}
            variant="weekly"
            style={{
              fontSize: typography.body.fontSize,
            }}
          >
            Load
          </StatusBadge>
        </div>
        <Divider />
        <div
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <StatusGuidance status={status} />
        </div>
      </div>
    </Card>
  );
};
