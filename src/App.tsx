import { ReactLenis } from "@studio-freight/react-lenis";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import { Header } from "./layout/Header";
import { useEffect, useState } from "react";
import Footer from "layout/Footer";
import "./App.css";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import ScrollToTop from "components/ScrollToTop";

export default function App() {
    const [init, setInit] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
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
                    {init && (
                        <Particles
                            options={particlesOptions as ISourceOptions}
                        />
                    )}
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
