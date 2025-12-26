import { AppShell } from "./ui/layout/AppShell";
import { Inline } from "./ui/layout/Inline";
import { Stack } from "./ui/layout/Stack";
import { Card } from "./ui/surfaces/Card";

const App = () => {
  return (
    <AppShell>
      <Stack gap="lg">
        <h1>Training Load Tracker</h1>

        <Card>
          <Stack gap="sm">
            <div>Weekly Load</div>
            <strong>420</strong>
          </Stack>
        </Card>
        <Inline gap="sm">
          <button>Cancel</button>
          <button>Add session</button>
        </Inline>
      </Stack>
    </AppShell>
  );
};

export default App;
