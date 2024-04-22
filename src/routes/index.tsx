import SuccessPage from "pages/SuccessTx";
import Home from "../pages/Home";

export const routes = {
    HOME: {
        path: "/",
        element: <Home />,
        loader: <Home />,
    },
    Success: {
        path: "/tx/success/:hash",
        element: <SuccessPage />,
    },
};
