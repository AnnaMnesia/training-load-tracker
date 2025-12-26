import { AppShell } from "./ui/layout/AppShell";
import { Inline } from "./ui/layout/Inline";
import { Stack } from "./ui/layout/Stack";

const App = () => {
  return (
    <AppShell>
      <Stack gap="lg">
        <h1>Training Load Tracker</h1>

        <Inline gap="sm">
          <button>Cancel</button>
          <button>Add session</button>
        </Inline>
      </Stack>
    </AppShell>
  );
};

export default App;
