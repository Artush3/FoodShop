import Header from "@/widgets/header"
import Hero from "./ui/hero"
import Catalog from "@/widgets/catalog"
import Footer from "@/widgets/footer"
import { Outlet } from "react-router"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Catalog />
            <Footer />
            <Outlet />
        </>
    )
}

export default Home