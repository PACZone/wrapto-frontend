import {
    SuccessPage,
    Home,
    TransactionMemoPage,
    TransactionsPage,
    NotFound,
} from "pages";
import RescanResult from "pages/RescanResult";

export const routes = {
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
