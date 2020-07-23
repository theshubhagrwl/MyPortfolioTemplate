import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#dd33fa",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    h1: {
      fontFamily: `"Reem Kufi", "Helvetica", "Arial", sans-serif`,
      fontWeight: "600",
      fontSize: "3.2rem",
      zIndex: "10",
    },
    h6: {
      color: "white",
      fontFamily: '"Roboto", sans-serif',
      fontSize: "1.2rem",
      fontWeight: "100",
      zIndex: "10",
    },
  },
});

export default theme;
