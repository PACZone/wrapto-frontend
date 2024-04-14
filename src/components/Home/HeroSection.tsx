import { ScrollDown } from "assets/icons";
import Reveal from "../../HOC/Reveal";
import { Link } from "react-scroll";
import "./style.css";

export default function HeroSection() {
  return (
    <div className="py-[145px] relative flex-col flex justify-center items-center max-w-[1198px] mx-auto text-center mt-[152px] mb-[218px] gap-sp10">
      <Reveal>
        <h1 className="heading-1">Bridge your PAC coin to any other Chain</h1>
      </Reveal>
      <Link
        className="cursor-pointer"
        to="transfer-box"
        spy={true}
        smooth={true}
        offset={50}
        duration={3000}
      >
        <ScrollDown />
      </Link>

      <img className="absolute -z-10 -top-10 spin" src="/ring.svg" alt="Ring" />
    </div>
  );
}
