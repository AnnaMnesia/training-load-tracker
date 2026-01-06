import { useState } from "react";
import { Card } from "../../../ui/surfaces/Card";
import type { SessionType } from "../../../types/session";
import { Stack } from "../../../ui/layout/Stack";
import { typography } from "../../../ui/styles/typography";
import { spacing } from "../../../ui/styles/spacing";
import { shadows } from "../../../ui/styles/shadows";
import { colors, radius } from "../../../ui/styles";

type AddSessionCardProps = {
  addSession: (input: {
    date: string;
    type: SessionType;
    durationMinutes: number;
    intensity: number;
  }) => void;
};

export const AddSessionCard = ({ addSession }: AddSessionCardProps) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState<SessionType>("run");
  const [durationMinutes, setDurationMinutes] = useState<number>(30);
  const [intensity, setIntensity] = useState<number>(3);

  const isValid =
    date !== "" && durationMinutes > 0 && intensity >= 1 && intensity <= 5;

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: spacing.xl,
          }}
        >
          {/* Date */}
          <Stack gap="xs">
            <label
              style={{
                ...typography.body,
                fontWeight: typography.body.emphasizedWeight,
              }}
            >
              Date
            </label>
            <input
              style={{
                ...typography.body,
                padding: spacing.xs,
                borderRadius: 4,
                border: "1px solid var(--border-color)",
                boxShadow: shadows.sm,
              }}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Stack>

          {/* Type */}
          <Stack gap="xs">
            <label
              style={{
                ...typography.body,
                fontWeight: typography.body.emphasizedWeight,
              }}
            >
              Activity Type
            </label>
            <select
              style={{
                ...typography.body,
                padding: spacing.xs,
                borderRadius: 4,
                border: "1px solid var(--border-color)",
                boxShadow: shadows.sm,
              }}
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
            <label
              style={{
                ...typography.body,
                fontWeight: typography.body.emphasizedWeight,
              }}
            >
              Duration (min)
            </label>
            <input
              type="number"
              inputMode="numeric"
              value={durationMinutes}
              style={{
                ...typography.body,
                padding: spacing.xs,
                borderRadius: 4,
                border: "1px solid var(--border-color)",
                boxShadow: shadows.sm,
              }}
              onChange={(e) =>
                setDurationMinutes(
                  Number(e.target.value.replace(/\D/g, "")) || 0
                )
              }
            />
          </Stack>

          {/* Intensity */}
          <Stack gap="xs">
            <label
              style={{
                ...typography.body,
                fontWeight: typography.body.emphasizedWeight,
              }}
            >
              Intensity
            </label>

            <div
              style={{
                display: "flex",
                gap: spacing.xs,
              }}
            >
              {[1, 2, 3, 4, 5].map((level) => {
                const isActive = intensity === level;

                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setIntensity(level)}
                    style={{
                      minWidth: 40,
                      padding: "8px 0",
                      borderRadius: radius.md,
                      border: "1px solid var(--border-color)",
                      backgroundColor: isActive
                        ? colors.light.primary
                        : colors.light.surface,
                      color: isActive
                        ? colors.light.textButton
                        : colors.light.textPrimary,
                      fontWeight: isActive
                        ? typography.body.emphasizedWeight
                        : typography.body.fontWeight,
                      boxShadow: isActive ? shadows.sm : "none",
                      cursor: "pointer",
                    }}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
          </Stack>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: spacing.sm,
          }}
        >
          <button
            disabled={!isValid}
            onClick={handleAddSession}
            style={{
              marginTop: spacing.md,
              ...typography.body,
              borderRadius: radius.xxl,
              padding: "8px 16px",
              backgroundColor: colors.light.primary,
              color: colors.light.textButton,
              border: "none",
              cursor: isValid ? "pointer" : "default",
              opacity: isValid ? 1 : 0.5,
            }}
          >
            Add Session
          </button>
        </div>
      </Stack>
    </Card>
  );
};
