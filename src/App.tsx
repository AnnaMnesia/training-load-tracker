import { AddSessionCard } from "./features/sessions/components/AddSessionCard";
import { WeeklyLoadCard } from "./features/sessions/components/WeeklyLoadCard";
import { RecentSessionsCard } from "./features/sessions/components/RecentSessionsCard";
import { AppShell } from "./ui/layout/AppShell";
import { Stack } from "./ui/layout/Stack";
import { typography } from "./ui/styles";
import { colors } from "./ui/styles/colors";

const App = () => {
  return (
    <AppShell>
      <Stack gap="md">
        <Stack gap="sm" align="flex-start">
          <h1
            style={{
              ...typography.largeTitle,
              fontSize: typography.largeTitle.fontSize,
              fontWeight: typography.largeTitle.emphasizedWeight,
            }}
          >
            Training Load{" "}
            <span style={{ color: colors.light.textSecondary }}> Tracker</span>
          </h1>
        </Stack>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
            alignItems: "stretch",
          }}
        >
          {" "}
          <WeeklyLoadCard />
          <RecentSessionsCard />
        </div>

        <Stack gap="md">
          <span
            style={{
              ...typography.title,
              fontWeight: typography.headline.emphasizedWeight,
              textAlign: "center",
            }}
          >
            Add Session
          </span>
          <AddSessionCard />
        </Stack>
      </Stack>
    </AppShell>
  );
};

export default App;
