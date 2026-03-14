import { BrowserRouter, Route, Routes } from "react-router"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("@/pages/home"))
const Details = lazy(() => import("@/pages/details"))
const Delivery = lazy(() => import("@/pages/delivery"))
const NotFound = lazy(() => import("@/pages/not-found"))

export const ROUTES = {
    HOME: "/",
    FOOD_DETAILS: "food/:id",
    DELIVERY: "delivery",
} as const

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path={ROUTES.FOOD_DETAILS} element={<Details />} />
                        <Route path={ROUTES.DELIVERY} element={<Delivery />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router