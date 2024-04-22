import { ReactLenis } from "@studio-freight/react-lenis";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import { Header } from "./layout/Header";
import Footer from "layout/Footer";
import ScrollToTop from "components/ScrollToTop";
import "./App.css";

export default function App() {
    return (
        <ReactLenis root>
            <ScrollToTop />
            <>
                <Header />
                <Routes>
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
            </>
        </ReactLenis>
    );
}
