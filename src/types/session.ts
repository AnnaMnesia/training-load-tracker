export type SessionType = "run" | "strength" | "swim";

export interface TrainingSession {
  id: string;
  date: string; // ISO date string: YYYY-MM-DD
  type: SessionType;
  durationMinutes: number; // > 0
  intensity: number; // 1–5
  load: number; // derived: durationMinutes * intensity
}
