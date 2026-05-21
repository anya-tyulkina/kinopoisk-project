import {createTheme} from '@mui/material/styles';
import type {Theme} from "@/app/api";

export const getTheme = (theme: Theme) => {
    return createTheme({
        palette: {
            mode: theme,
            background: {
                default: theme === "dark" ? "#0F172A" : "#FFFFFF",
                paper: theme === "dark" ? "#1E293B" : "#F8FAFC",
            },
            text: {
                primary: theme === "dark" ? "#F1F5F9" : "#0F172A",
                secondary: theme === "dark" ? "#94A3B8" : "#475569",
            },
            primary: {
                main: '#FF5733',
            },
            secondary: {
                main: '#E0C2FF',
                light: '#F5EBFF',
                contrastText: '#47008F',
            },
        },
    })
}
