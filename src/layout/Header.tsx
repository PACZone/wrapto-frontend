import Link from "components/shared/Link";
import { Link as CustomLink } from "react-router-dom";
import { links } from "./links";
import Logo from "assets/svg/logo.svg";
import { ConnectButton } from "components/shared/ConnectButton";
import { EllipseIcon } from "assets/icons";

export function Header() {
    return (
        <header className="container mx-auto px-10  border-b border-gray-normal py-sp6 font-light">
            <nav className="flex justify-between items-center">
                <CustomLink draggable={false} to="/">
                    <img src={Logo} alt="Logo" className="text-primary" />
                </CustomLink>
                <ul className=" gap-sp8 md:flex hidden">
                    {links.map((link, key) => (
                        <li key={key}>
                            <Link
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
        </header>
    );
}
