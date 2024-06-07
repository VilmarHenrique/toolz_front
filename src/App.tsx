import { createContext, useState } from "react";
import Routes from "./routes/routes";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";

type Themes = "light" | "dark" | undefined;

interface ThemeContextType {
  theme: Themes;
  toogleTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextType);
function App() {
  const [theme, setTheme] = useState<Themes>("light");

  function toogleTheme() {
    const themeNow = theme === "light" ? "dark" : "light";
    setTheme(themeNow);
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
          <GlobalStyle />
          <Routes />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
