import React, { createContext, useContext, useState } from "react";

type TransferBoxContextType = {
    setTransferFrom: React.Dispatch<React.SetStateAction<string | number>>;
    transferFrom: string | number;
    setTransferTo: React.Dispatch<React.SetStateAction<string | number>>;
    transferTo: string | number;
    setAnimationKey: React.Dispatch<React.SetStateAction<number>>;
    animationKey: number;
    setIsFromPac: React.Dispatch<React.SetStateAction<boolean>>;
    isFromPac: boolean;
    setNetwork: React.Dispatch<React.SetStateAction<string>>;
    network: string;
    setTransferToError: React.Dispatch<React.SetStateAction<string>>;
    transferToError: string;
    setTransferFromError: React.Dispatch<React.SetStateAction<string>>;
    transferFromError: string;
};

const TransferBoxContext = createContext<TransferBoxContextType | undefined>(
    undefined,
);

export const useTransferBoxContext = () => {
    const context = useContext(TransferBoxContext);
    if (!context) {
        throw new Error(
            "useTransferBoxContext must be used within an TransferBoxContextProvider",
        );
    }
    return context;
};
export const TransferBoxContextProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [animationKey, setAnimationKey] = useState(0);
    const [isFromPac, setIsFromPac] = useState(false);
    const [transferTo, setTransferTo] = useState<string | number>("");
    const [transferFrom, setTransferFrom] = useState<number | string>("");
    const [network, setNetwork] = useState<string>("amoy");
    const [transferToError, setTransferToError] = useState<string>("");
    const [transferFromError, setTransferFromError] = useState<string>("");

    return (
        <TransferBoxContext.Provider
            value={{
                network,
                setNetwork,
                transferFrom,
                setTransferFrom,
                transferTo,
                setTransferTo,
                setIsFromPac,
                isFromPac,
                animationKey,
                setAnimationKey,
                transferToError,
                setTransferToError,
                transferFromError,
                setTransferFromError,
            }}
        >
            {children}
        </TransferBoxContext.Provider>
    );
};
