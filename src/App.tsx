import { ReactLenis } from "@studio-freight/react-lenis";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import { Header } from "./layout/Header";
import { useEffect, useState } from "react";
import Footer from "layout/Footer";
import ScrollToTop from "components/ScrollToTop";
import "./App.css";

export default function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const handleLoadingTime = () => {
            setTimeout(() => {
                setLoading(false);
            }, 3700);
        };

        handleLoadingTime();
    }, []);

    useEffect(() => {}, []);
    return (
        <ReactLenis root>
            <ScrollToTop />
            <Loading />
            {!loading && (
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
            )}
        </ReactLenis>
    );
}
