import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#317731"
        },
        secondary: {
            main: "#fa0"
        }
    }
});
export function isDarkMode():boolean {
    var mode = window.localStorage.getItem("mode");
    return mode === "dark";
}

export default theme;