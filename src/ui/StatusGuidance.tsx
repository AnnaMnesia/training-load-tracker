import { typography } from "./styles/typography";
import { colors } from "./styles/colors";

type Status = "green" | "orange" | "red";

const GUIDANCE_COPY: Record<Status, string[]> = {
  green: [
    "Your training load is well balanced.",
    "You can maintain your current intensity or gradually increase.",
  ],
  orange: [
    "Your load is elevated.",
    "Focus on recovery or reduce intensity for the next sessions.",
  ],
  red: [
    "Your load is high and recovery may be compromised.",
    "Consider rest or low-intensity training.",
  ],
};

export const StatusGuidance = ({ status }: { status: Status }) => {
  const lines = GUIDANCE_COPY[status];

  return (
    <div style={{ textAlign: "center" }}>
      {lines.map((line, index) => (
        <p
          key={index}
          style={{
            ...typography.body,
            color:
              index === 0
                ? colors.light.textPrimary
                : colors.light.textSecondary,
            margin: index === 0 ? 0 : "4px 0 0",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
};
