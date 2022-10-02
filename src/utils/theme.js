import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    // smooth red
    secondary: {
      main: "#d15050",
      contrastText: "#f3f3f3",
    },
    //   creamy
    primary: {
      main: "#f3f3f3",
      contrastText: "#000",
    },
    error: {
      main: "#d15050",
      contrastText: "#f3f3f3",
    },
  },
});
export default theme;
