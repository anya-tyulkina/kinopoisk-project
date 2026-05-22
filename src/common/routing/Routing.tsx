import {Route, Routes} from 'react-router'
import {Main} from '@/app/Main'
import { PageNotFound } from '@/common/components'
import {OAuthCallback} from "@/features/login/ui/OAuthCallback/OAuthCallback.tsx";

export const Path = {
    Main: '/',
    Category: '/category',
    Filtered: '/filtered',
    Search: '/search',
    Callback: '/callback',
    Favorites: '/favorites',
    NotFound: '*',
} as const

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.Main} element={<Main />} />
            <Route path="/callback" element={<OAuthCallback />} />
            <Route path={Path.NotFound} element={<PageNotFound />} />
        </Routes>
    )
}
