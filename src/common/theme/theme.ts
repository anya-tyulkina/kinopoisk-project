import {createTheme} from '@mui/material/styles';
import type {Theme} from "@/app/api";

export const getTheme = (theme: Theme) => {
    return createTheme({
        palette: {
            mode: theme,
            primary: {
                main: '#FF5733',
                // light: will be calculated from palette.primary.main,
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                main: '#E0C2FF',
                light: '#F5EBFF',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#47008F',
            },
        },
    })
}
