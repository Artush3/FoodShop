import { BrowserRouter, Route, Routes } from "react-router"
import Home from "@/pages/Home"
import Details from "@/pages/Details"
import Delivery from "@/pages/Delivery"
import NotFound from "@/pages/NotFound"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/food/:id" element={<Details />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router