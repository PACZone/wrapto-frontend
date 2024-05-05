import TransferSection from "components/Home/TransferSection";
import HeroSection from "../../components/Home/HeroSection";
import { TransferBoxContextProvider } from "context/TransferBoxContext";
import RecentlyBridge from "components/Home/RecentlyBridge";

export function Home() {
    return (
        <main className="container mx-auto overflow-x-hidden">
            <HeroSection />
            <TransferBoxContextProvider>
                <TransferSection />
            </TransferBoxContextProvider>
            <RecentlyBridge />
        </main>
    );
}
