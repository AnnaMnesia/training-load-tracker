import { typography } from "./styles/typography";
import { colors } from "./styles/colors";

type Status = "green" | "orange" | "red";

const GUIDANCE_COPY: Record<Status, string[]> = {
  green: [
    "Your training load is well balanced and sustainable.",
    "Continue with your current training plan, ensuring to include adequate recovery and nutrition to support ongoing adaptation.",
  ],
  orange: [
    "Your training load is higher than usual.",
    "Consider prioritizing recovery strategies such as sleep, nutrition, and hydration to support adaptation. Reduce intensity if you notice signs of fatigue.",
  ],
  red: [
    "Your training load is very high and may lead to overtraining.",
    "It's advisable to reduce training intensity and volume. Focus on recovery and monitor for signs of overtraining such as persistent fatigue, irritability, or decreased performance.",
  ],
};

export const StatusGuidance = ({ status }: { status: Status }) => {
  const lines = GUIDANCE_COPY[status];

  return (
    <div style={{ textAlign: "start" }}>
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
