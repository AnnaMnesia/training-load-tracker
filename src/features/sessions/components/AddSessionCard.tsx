import { useState } from "react";
import { Card } from "../../../ui/surfaces/Card";
import { useSessions } from "../hooks/useSessions";
import type { SessionType } from "../../../types/session";
import { Stack } from "../../../ui/layout/Stack";
import { typography } from "../../../ui/styles/typography";
import { spacing } from "../../../ui/styles/spacing";

const numberInputStyle: React.CSSProperties = {
  appearance: "textfield",
  MozAppearance: "textfield",
  WebkitAppearance: "none",
};

export const AddSessionCard = () => {
  const { addSession } = useSessions();

  const [date, setDate] = useState("");
  const [type, setType] = useState<SessionType>("run");
  const [durationMinutes, setDurationMinutes] = useState<number>(30);
  const [intensity, setIntensity] = useState<number>(3);

  const isValid =
    date !== "" &&
    durationMinutes > 0 &&
    intensity >= 1 &&
    intensity <= 5;

  const handleAddSession = () => {
    if (!isValid) return;

    addSession({
      date,
      type,
      durationMinutes,
      intensity,
    });

    setDate("");
    setType("run");
    setDurationMinutes(30);
    setIntensity(3);
  };

  return (
    <Card>
      <Stack gap="md">
        {/* Date */}
        <Stack gap="xs">
          <label style={typography.footnote}>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Stack>

        {/* Type */}
        <Stack gap="xs">
          <label style={typography.footnote}>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as SessionType)}
          >
            <option value="run">Run</option>
            <option value="strength">Strength</option>
            <option value="swim">Swim</option>
          </select>
        </Stack>

        {/* Duration */}
        <Stack gap="xs">
          <label style={typography.footnote}>Duration (minutes)</label>
          <input
            type="text"
            inputMode="numeric"
            value={durationMinutes}
            style={numberInputStyle}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setDurationMinutes(value === "" ? 0 : Number(value));
            }}
          />
        </Stack>

        {/* Intensity */}
        <Stack gap="xs">
          <label style={typography.footnote}>Intensity (1–5)</label>
          <input
            type="text"
            inputMode="numeric"
            value={intensity}
            style={numberInputStyle}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value === "") {
                setIntensity(0);
                return;
              }

              const numeric = Number(value);
              if (numeric > 5) return;

              setIntensity(numeric);
            }}
          />
        </Stack>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: spacing.sm,
          }}
        >
          <button disabled={!isValid} onClick={handleAddSession}>
            Add Session
          </button>
        </div>
      </Stack>
    </Card>
  );
};
