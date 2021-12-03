import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#408bd7",
        },
        secondary: {
            main: "#FFFFFF",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#FFFFFF",
        },
    },
});

export default theme;