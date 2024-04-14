import TransferBox from "components/Home/TransferBox";
import HeroSection from "../../components/Home/HeroSection";
import data from "./data.json";

export default function Home() {
    //   console.log(transferBoxes);

    return (
        <main className="container mx-auto">
            <HeroSection />
            <TransferBox title="Transfer From" selectItems={data.pactus} />
            <TransferBox title="Transfer To" selectItems={data.companies} />
        </main>
    );
}
