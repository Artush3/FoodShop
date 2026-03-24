import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/pages/home'))
const Details = lazy(() => import('@/pages/details'))
const NotFound = lazy(() => import('@/pages/not-found'))

const ROUTES = {
    HOME: '/',
    FOOD_DETAILS: 'food/:id'
} as const

const AppRoutes = () => {
    const location = useLocation()

    const background = location.state?.background

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes location={background ?? location}>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                {background && (
                    <Routes>
                        <Route path={ROUTES.FOOD_DETAILS} element={<Details />} />
                    </Routes>
                )}
            </Suspense>
        </>
    )
}

const Router = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
)

export default Router