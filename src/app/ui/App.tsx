import s from './App.module.css'
import {Footer, Header} from "@/common/components";
import {Routing} from "@/common/routing";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {getTheme} from "@/common/theme";
import { useAppSelector } from '@/common/hooks';
import { selectThemeMode } from '@/app/api';

function App() {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <div className={s.app}>
                <CssBaseline />
                <Header/>
                <main className={s.mainContent}>
                    <Routing/>
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default App
