import { defaultTheme } from "react-admin";
import { createTheme, ThemeOptions } from "@material-ui/core/styles";
import { merge } from "lodash";
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
  merge({}, defaultTheme.palette, {
    primary: {
      main: "#00493A",
    },
    secondary: {
      main: "#00735C",
    },
    error: {
      main: "#e93c51",
    },
    warning: {
      main: "#f6aa50",
    },
    info: {
      main: "#144bc1",
    },
    success: {
      main: "#31c587",
    },
  })
);

const themeOptions: ThemeOptions = {
  palette,
};

export const theme = createTheme(merge({}, defaultTheme, themeOptions));
