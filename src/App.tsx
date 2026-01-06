import { AddSessionCard } from "./features/sessions/components/AddSessionCard";
import { WeeklyLoadCard } from "./features/sessions/components/WeeklyLoadCard";
import { RecentSessionsCard } from "./features/sessions/components/RecentSessionsCard";
import { AppShell } from "./ui/layout/AppShell";
import { Stack } from "./ui/layout/Stack";
import { typography } from "./ui/styles";
import { colors } from "./ui/styles/colors";
import { useSessions } from "./features/sessions/hooks/useSessions";

const App = () => {
  const sessionsStore = useSessions(); // ✅ SINGLE SOURCE OF TRUTH
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
          <WeeklyLoadCard sessions={sessionsStore.sessions} />
          <RecentSessionsCard sessions={sessionsStore.sessions} />
        </div>

        <Stack gap="md">
          <span
            style={{
              ...typography.title,
              fontWeight: typography.headline.fontWeight,
              textAlign: "center",
              marginTop: 24,
            }}
          >
            Add Session
          </span>
          <AddSessionCard addSession={sessionsStore.addSession} />
        </Stack>
      </Stack>
    </AppShell>
  );
};

export default App;
