// useWeeklyLoad
// It looks at all sessions, keeps only the last 7 days, adds their load, and tells us green / yellow / red (gives the status).

import { useMemo } from "react";
import type { TrainingSession } from "../../../types/session";

type WeeklyStatus = "green" | "orange" | "red";

// Recovery Thresholds
const GREEN_THRESHOLD = 300;
const ORANGE_THRESHOLD = 600;

export const useWeeklyLoad = (
  sessions: TrainingSession[],
  now: Date = new Date()
) => {
  const weeklyLoad = useMemo(() => {
    // Calculate the date one week ago from now
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);

    // Filter sessions to keep only sessions from the last 7 days
    const recentSessions = sessions.filter((session) => {
      const sessionDate = new Date(session.date);
      return sessionDate >= oneWeekAgo;
    });

    // Add up their load
    return recentSessions.reduce((sum, session) => sum + session.load, 0);
  }, [sessions, now]);

  // Determine the recovery status based on weekly load
  const status: WeeklyStatus = useMemo(() => {
    if (weeklyLoad < GREEN_THRESHOLD) return "green";
    if (weeklyLoad < ORANGE_THRESHOLD) return "orange";
    return "red";
  }, [weeklyLoad]);

  return { weeklyLoad, status };
};
