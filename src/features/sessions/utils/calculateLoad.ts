export const calculateLoad = (
  durationMinutes: number,
  intensity: number
): number => {
  return durationMinutes * intensity;
};
