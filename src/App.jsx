import Dashboard from "./components/layouts/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex-1 overflow-y-auto">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
