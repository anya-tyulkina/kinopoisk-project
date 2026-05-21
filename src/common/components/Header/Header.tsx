import {changeTheme, selectThemeMode} from '@/app/api';
import s from './Header.module.css'
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {MaterialUISwitch} from "@/common/switch/CastomSwitch.tsx";

export const Header = () => {

    const dispatch = useAppDispatch()
    const themeMode = useAppSelector(selectThemeMode)

    const changeMode = () => {
        dispatch(changeTheme({theme: themeMode === 'light' ? 'dark' : 'light'}))
    }

    return (
        <div className={s.header}>
            <h3>header</h3>
            <MaterialUISwitch onClick={changeMode}/>
        </div>
    )
}