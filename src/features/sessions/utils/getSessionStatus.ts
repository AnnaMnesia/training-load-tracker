export type SessionStatus = "green" | "orange" | "red";

export const getSessionStatus = (load: number): SessionStatus => {
  if (load < 100) return "green"; // Easy
  if (load < 190) return "orange"; // Moderate
  return "red"; // Hard
};
