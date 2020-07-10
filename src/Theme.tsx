import { createMuiTheme } from "@material-ui/core";
import { green, blue, deepOrange, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500]
        },
        secondary: {
            main: deepOrange[500]
        },
        type: (isDarkMode())?'dark':'light'
    }
});
export function isDarkMode():boolean {
    var mode = window.localStorage.getItem("mode");
    return mode === "dark";
}

export default theme;