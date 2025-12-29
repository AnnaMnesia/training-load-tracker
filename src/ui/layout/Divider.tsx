import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

export const Divider = () => (
  <div
    style={{
      height: 1,
      backgroundColor: colors.light.border,
      margin: `${spacing.sm}px 0`,
      width: "100%",
    }}
  />
);
