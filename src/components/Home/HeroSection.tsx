import { ScrollDown } from "assets/icons";
import Reveal from "../../HOC/Reveal";
import { Link } from "react-scroll";
import "./style.css";

export default function HeroSection() {
    return (
        <div className="md:py-[145px] relative flex-col flex justify-center items-center max-w-[1198px] mx-auto text-center mt-[152px] mb-[218px] gap-sp10">
            <Reveal>
                <h1 className="lg:heading-1 md:heading-4 heading-3">
                    Bridge your{" "}
                    <span className="text-secondary border rounded-full text-[95px] border-secondary px-sp8 py-sp3 inline-flex items-center h-sp13 bg-[#24292BB8] bg-opacity-[72%]">
                        {" "}
                        PAC
                    </span>{" "}
                    coin to any other Chain
                </h1>
            </Reveal>
            <Link
                className="cursor-pointer"
                to="transfer-box"
                spy={true}
                smooth={true}
                offset={50}
                duration={3000}
            >
                <ScrollDown className="animate-bounce" />
            </Link>

            <img
                className="absolute -z-10 md:-top-10 -top-24 spin "
                src="/ring.svg"
                alt="Ring"
            />
        </div>
    );
}
