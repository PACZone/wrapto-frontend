import { ReactLenis } from "@studio-freight/react-lenis";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

export default function App() {

  return (
    <ReactLenis root>
      <Loading />
      <Routes>
        {Object.keys(routes).map((route, index) => {
          const routeKey = route as keyof typeof routes;
          console.log(routeKey);
          return (
            <Route
              key={index}
              element={routes[routeKey].element}
              path={routes[routeKey].path}
            />
          );
        })}
      </Routes>
    </ReactLenis>
  );
}
