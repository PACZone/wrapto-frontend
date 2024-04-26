import Link from "components/shared/Link";
import { Link as ReactRouterLink } from "react-router-dom";
import { links } from "./links";
import Logo from "assets/svg/logo.svg";
import { ConnectButton } from "components/shared/ConnectButton";
import { EllipseIcon } from "assets/icons";
import BurgerMenu from "./BurgerMenu";

export function Header() {
    return (
        <header className="container mx-auto py-sp6 px-sp5 md:px-10  md:py-sp6 border-b border-gray-normal font-light">
            <nav className="md:flex hidden justify-between items-center">
                <ReactRouterLink draggable={false} to="/">
                    <img src={Logo} alt="Logo" className="text-primary" />
                </ReactRouterLink>
                <ul className=" gap-sp8 flex ">
                    {links.map((link, key) => (
                        <li key={key}>
                            <Link
                                target={
                                    link.link.includes("http")
                                        ? "_blank"
                                        : "_self"
                                }
                                to={link.link}
                                className="body-1"
                                variant="primary"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ConnectButton
                    variant="secondary"
                    variantType="link"
                    leftIcon={<EllipseIcon className="text-secondary" />}
                />
            </nav>
            <BurgerMenu />
        </header>
    );
}
