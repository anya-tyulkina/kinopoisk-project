import {Route, Routes} from 'react-router'
import {Main} from '@/app/Main'
import { PageNotFound } from '@/common/components'

export const Path = {
    Main: '/',
    NotFound: '*',
} as const

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.Main} element={<Main />} />
            <Route path={Path.NotFound} element={<PageNotFound />} />
        </Routes>
    )
}
