import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { TasksProvider } from "./components/contexts/TasksContext";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TasksProvider>
        <Home/>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App
