// src/features/sessions/hooks/useSessions.ts

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

  // Persist to localStorage whenever sessions change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  const addSession = ({
    date,
    type,
    durationMinutes,
    intensity,
  }: AddSessionInput) => {
    if (durationMinutes <= 0) return;
    if (intensity < 1 || intensity > 5) return;

    const newSession: TrainingSession = {
      id: crypto.randomUUID(),
      date,
      type,
      durationMinutes,
      intensity,
      load: calculateLoad(durationMinutes, intensity),
    };

    setSessions((prev) => [...prev, newSession]);
  };

  const deleteSession = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
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

        const updated = { ...session, ...update };

        return {
          ...updated,
          load: calculateLoad(updated.durationMinutes, updated.intensity),
        };
      })
    );
  };

  return {
    sessions,
    addSession,
    deleteSession,
    updateSession,
  };
};
