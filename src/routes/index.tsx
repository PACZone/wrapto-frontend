import {
    SuccessPage,
    Home,
    TransactionMemoPage,
    TransactionsPage,
    NotFound,
} from "pages";

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
