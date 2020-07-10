import { createMuiTheme } from "@material-ui/core";
import { green, blue, deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[900]
        },
        secondary: {
            main: deepOrange[500]
        }
    }
});

export default theme;