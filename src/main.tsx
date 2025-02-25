import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Buffer } from "buffer";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";


import { config } from "./wagmi/wagmi.ts";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";


globalThis.Buffer = Buffer;

const queryClient = new QueryClient();
const loadingScreen = document.getElementById("loading-screen");

if (loadingScreen) {
  loadingScreen.style.display = "none";
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider
                        theme={darkTheme({
                            accentColor: "#3ae27d",
                            accentColorForeground: "#0C0E0E",
                            borderRadius: "small",
                            fontStack: "system",
                            overlayBlur: "small",
                        })}
                    >
                        <App />
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
