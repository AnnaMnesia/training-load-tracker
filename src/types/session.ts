export type SessionType = "run" | "strength" | "swim" | "rest";

export interface TrainingSession {
  id: string;
  date: string; // ISO date string (local date)
  type: SessionType;
  durationMinutes: number; // integer > 0
  intensity: number; // 1–5
  load: number; // derived: durationMinutes * intensity
}
