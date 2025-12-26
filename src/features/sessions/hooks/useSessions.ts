// useSessions is:
// A custom hook
// That owns the sessions array
// Reads it once from localStorage
// Writes it back whenever it changes

// 1️⃣ Why a custom hook?
// Because:
// Multiple components will need sessions
// We want one source of truth
// Logic ≠ UI

import { useEffect, useState } from "react";
import type { SessionType, TrainingSession } from "../../../types/session";
import { calculateLoad } from "../utils/calculateLoad";

const STORAGE_KEY = "sessions";

type AddSessionInput = {
  date: string;
  type: SessionType;
  durationMinutes: number;
  intensity: number;
};

export const useSessions = () => {
  const [sessions, setSessions] = useState<TrainingSession[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    try {
      return JSON.parse(stored) as TrainingSession[];
    } catch {
      return [];
    }
  });

  // What this means:
  // React renders first
  // Then runs the effect
  // Effect runs only when sessions change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  const addSession = (input: AddSessionInput) => {
    if (input.durationMinutes <= 0) return;
    if (input.intensity < 1 || input.intensity > 5) return;

    const newSession: TrainingSession = {
      id: crypto.randomUUID(),
      date: input.date,
      type: input.type,
      durationMinutes: input.durationMinutes,
      intensity: input.intensity,
      load: calculateLoad(input.durationMinutes, input.intensity),
    };
    setSessions((prev) => [...prev, newSession]);
  };

  const deleteSession = (id: string) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };

  const updateSession = (
    id: string,
    update: Partial<Omit<TrainingSession, "id" | "load">>
  ) => {
    setSessions((prev) =>
      prev.map((session) => {
        if (session.id !== id) return session;
        if (
          update.durationMinutes !== undefined &&
          update.durationMinutes <= 0
        ) {
          return session;
        }

        if (
          update.intensity !== undefined &&
          (update.intensity < 1 || update.intensity > 5)
        ) {
          return session;
        }

        const updatedSession = {
          ...session,
          ...update,
        };

        return {
          ...updatedSession,
          load: calculateLoad(
            updatedSession.durationMinutes,
            updatedSession.intensity
          ),
        };
      })
    );
  };

  return { sessions, addSession, deleteSession, updateSession };
};
