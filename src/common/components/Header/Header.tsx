import {changeTheme, selectThemeMode} from '@/app/api';
import s from './Header.module.css'
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {MaterialUISwitch} from "@/common/switch/CastomSwitch.tsx";
import {Path} from '@/common/routing';
import {NavLink} from 'react-router';
import logo from '@/assets/logo.svg'
import {Button} from '@mui/material';
import {useLazyFetchAuthTokenQuery} from "@/features/login/api/authApi.ts";

const navItems = [
    {to: Path.Main, label: 'Main'},
    {to: Path.Category, label: 'Category Movies'},
    {to: Path.Filtered, label: 'Filtered Movies'},
    {to: Path.Search, label: 'Search'},
    {to: Path.Favorites, label: 'Favorites'},
]


export const Header = () => {
    const [trigger, { data: token }]= useLazyFetchAuthTokenQuery()

    // const {data} = useFetchMainImageQuery()
    // console.log(data)
    //
    console.log(token)

    const dispatch = useAppDispatch()
    const themeMode = useAppSelector(selectThemeMode)

    const changeMode = () => {
        dispatch(changeTheme({theme: themeMode === 'light' ? 'dark' : 'light'}))
    }

    const handleLogin = async () => {
        const result = await trigger().unwrap();

        window.location.href =
            `https://www.themoviedb.org/authenticate/${result.request_token}?redirect_to=https://kinopoisk-project.vercel.app/callback`;
    };

    return (
        <div className={s.header}>
            <img src={logo} width={'200'} height={'40'} alt="logo"/>
            <nav>
                <ul className={s.list}>
                    {navItems.map(item => {
                        return (
                            <>
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className={({isActive}) => `link ${isActive ? s.activeLink : ''}`}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                                <span className={s.separator}>|</span>
                            </>
                        )
                    })}
                </ul>
            </nav>
            <MaterialUISwitch onClick={changeMode}/>
            <Button onClick={handleLogin}>login</Button>
        </div>
    )
}