import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  createGenerateClassName,
  responsiveFontSizes
} from "@material-ui/core/styles";

import Main from "./routes/Main";
import { StoreProvider } from "./hooks";

const generateClassName = createGenerateClassName({
  productionPrefix: "et-"
});

export default function App() {
  const prefersDarkMode = false;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        },
        overrides: {
          MuiInputLabel: {
            root: {
              fontSize: "13px"
            }
          }
        }
      }),
    [prefersDarkMode]
  );

  return (
    // generate dynamic class name
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <StoreProvider>
          <Main />
        </StoreProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}
