import TransferSection from "components/Home/TransferSection";
import HeroSection from "../../components/Home/HeroSection";
import { TransferBoxContextProvider } from "context/TransferBoxContext";
import RecentlyBridge from "components/Home/RecentlyBridge";
import MetaNumberTickers from "components/Home/MetaNumberTickers";

export function Home() {
    return (
        <main className="container mx-auto overflow-x-hidden">
            <HeroSection />
            <MetaNumberTickers />
            <TransferBoxContextProvider>
                <TransferSection />
            </TransferBoxContextProvider>
            <RecentlyBridge />
        </main>
    );
}
