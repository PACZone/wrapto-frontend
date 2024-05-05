import { ScrollDown } from "assets/icons";
import Reveal from "../../HOC/Reveal";
import { Link } from "react-scroll";
import "./style.css";

export default function HeroSection() {
    return (
        <div className="md:py-[145px] relative flex-col flex justify-center items-center max-w-[1198px] mx-auto text-center mt-[152px] mb-[218px] gap-sp10">
            <Reveal>
                <h1 className="lg:heading-1 heading-4 leading-[62px] lg:leading-[101px] ">
                    Bridge your{" "}
                    <span className="text-secondary border rounded-full border-secondary px-sp8 py-sp3 inline-flex items-center my-2 md:my-0 lg:max-h-sp13 max-h-sp11 bg-[#24292BB8] bg-opacity-[72%]">
                        {" "}
                        PAC
                    </span>{" "}
                    coin to any other Chain
                </h1>
            </Reveal>
            <Link
                className="cursor-pointer relative"
                to="transfer-box"
                spy={true}
                smooth={true}
                offset={50}
                duration={3000}
            >
                <ScrollDown className="text-gray-200" />
                {/* <div className="absolute left-1/4 border-gray-100 border-2 border-l-0 border-t-0 size-sp4  -bottom-4 rotate-45"></div> */}

                <div className="arrow-scroll-down -bottom-4 "></div>
                <div className="arrow-scroll-down -bottom-[22px] "></div>
            </Link>

            <img
                className="absolute -z-10 md:-top-10 -top-24 spin "
                src="/ring.svg"
                alt="Ring"
            />
        </div>
    );
}
