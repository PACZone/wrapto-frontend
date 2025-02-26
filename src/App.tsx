import { ReactLenis } from "@studio-freight/react-lenis";
import { routes, RedirectHandler } from "./routes";
import { Route, Routes } from "react-router-dom";
import { Header } from "./layout/Header";
import Footer from "layout/Footer";
import ScrollToTop from "components/ScrollToTop";
// import Banner from "components/Banner";
import "./App.css";

export default function App() {
    return (
        <ReactLenis root>
            <ScrollToTop />
            <Header />
            {/* <Banner
                title="Title for this toast"
                description="Wrapto experienced a security breach and data loss. We kindly ask for your patience while we work to restore service and account access"
            /> */}
            <Routes>
                <Route path="*" element={<RedirectHandler />} />
                {Object.keys(routes).map((route, index) => {
                    const routeKey = route as keyof typeof routes;
                    return (
                        <Route
                            key={index}
                            element={routes[routeKey].element}
                            path={routes[routeKey].path}
                        />
                    );
                })}
            </Routes>
            <Footer />
        </ReactLenis>
    );
}
