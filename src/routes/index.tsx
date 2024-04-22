import SuccessPage from "pages/SuccessTx";
import Home from "../pages/Home";
import TransactionMemoPage from "../pages//TransactionMemo";

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
    TransactionMemo: {
        path: "/transactionMemo",
        element: <TransactionMemoPage />,
    },
};
