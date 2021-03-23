import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#c23616',
            // main: '#273c75',
        },
        secondary: {
            main: '#2980b9',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#bdc3c7',
        },
    },
});

export default theme;