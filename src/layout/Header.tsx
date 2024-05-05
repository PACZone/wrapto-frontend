import Link from "components/shared/Link";
import { Link as ReactRouterLink } from "react-router-dom";
import { communityLinks, links } from "./links.tsx";
import Logo from "assets/svg/logo.svg";
import { ConnectButton } from "components/shared/ConnectButton";
import { EllipseIcon } from "assets/icons";
import BurgerMenu from "./BurgerMenu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "components/shared/NavigationMenu.tsx";

export function Header() {
    return (
        <header className="container mx-auto py-sp6 px-sp5 lg:px-10  lg:py-sp6 border-b border-gray-normal font-light">
            <nav className="lg:flex hidden justify-between items-center">
                <ReactRouterLink draggable={false} to="/">
                    <img src={Logo} alt="Logo" className="text-primary" />
                </ReactRouterLink>
                <ul className=" gap-sp8 flex ">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className=" gap-sp2">
                                    <span>
                                        <EllipseIcon
                                            className={"text-primary"}
                                        />
                                    </span>
                                    Item One
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {communityLinks.map((link, key) => (
                                        <NavigationMenuLink
                                            target="_blank"
                                            href={link.link}
                                            className=" gap-2 "
                                            key={key}
                                        >
                                            <div className="flex  gap-sp4  w-full">
                                                {link.icon}
                                                <div className="text-start body-1 whitespace-nowrap flex flex-col gap-[2px]">
                                                    <span className="text-white">
                                                        {link.title}
                                                    </span>
                                                    <span className="text-gray-300">
                                                        {link.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

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
                                {link.title}
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
