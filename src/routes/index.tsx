import {
    SuccessPage,
    Home,
    TransactionMemoPage,
    TransactionsPage,
    NotFound,
} from "pages";
import RescanResult from "pages/RescanResult";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { redirectLinks } from "./redirectLinks";
const RedirectHandler = () => {
    const location = useLocation();

    useEffect(() => {
        const redirect = redirectLinks.find(r => r.route === location.pathname);
        if (redirect) {
            if (redirect.redirect.startsWith("http")) {
                window.location.href = redirect.redirect;
            }
        }
    }, [location]);

    const redirect = redirectLinks.find(r => r.route === location.pathname);
    if (redirect && !redirect.redirect.startsWith("http")) {
        return <Navigate to={redirect.redirect} replace />;
    }

    return null;
};

const routes = {
    Home: {
        path: "/",
        element: <Home />,
        loader: <Home />,
    },
    Success: {
        path: "/tx/success/:hash",
        element: <SuccessPage />,
    },
    RescanResult: {
        path: "/rescan-result",
        element: <RescanResult />,
    },
    TransactionMemo: {
        path: "/transactionMemo",
        element: <TransactionMemoPage />,
    },
    Transactions: {
        path: "/transactions",
        element: <TransactionsPage />,
    },
    NotFound: {
        path: "*",
        element: <NotFound />,
    },
};
export { RedirectHandler, routes };
