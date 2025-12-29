import { WeeklyLoadCard } from "./features/sessions/components/WeeklyLoadCard";
import { AppShell } from "./ui/layout/AppShell";
import { Inline } from "./ui/layout/Inline";
import { Stack } from "./ui/layout/Stack";
import { typography } from "./ui/styles";
import { colors } from "./ui/styles/colors";

const App = () => {
  return (
    <AppShell>
      <Stack gap="lg">
        <Stack gap="md" align="flex-start">
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
        <WeeklyLoadCard />
        <Inline gap="sm">
          <button>Cancel</button>
          <button>Add session</button>
        </Inline>
      </Stack>
    </AppShell>
  );
};

export default App;
