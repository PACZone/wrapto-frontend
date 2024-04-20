import TransferSection from "components/Home/TransferSection";
import HeroSection from "../../components/Home/HeroSection";
import { TransferBoxContextProvider } from "context/TransferBoxContext";

export default function Home() {
    return (
        <main className="container mx-auto">
            <HeroSection />
            <TransferBoxContextProvider>
                <TransferSection />
            </TransferBoxContextProvider>
        </main>
    );
}
