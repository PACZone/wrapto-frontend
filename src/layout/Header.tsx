import ReScanModal from "./RescanModal.tsx";
import Link from "components/shared/Link";
import BurgerMenu from "./BurgerMenu";
import Logo from "assets/svg/logo.svg";
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { links, navigationLinks } from "./links.tsx";
import { ConnectButton } from "components/shared/ConnectButton";
import { EllipseIcon } from "assets/icons";
import { Button } from "components/shared/Button.tsx";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "components/shared/NavigationMenu.tsx";


export function Header() {
    const [reScanModalOpen, setReScanModalOpen] = useState(false);
    return (
        <header className="container mx-auto py-sp6 px-sp5 lg:px-10  lg:py-sp6 border-b border-gray-normal font-light">
            <nav className="xl:flex hidden justify-between items-center">
                <ReactRouterLink draggable={false} to="/">
                    <img src={Logo} alt="Logo" className="text-primary" />
                </ReactRouterLink>
                <ul className=" gap-sp8 flex ">
                    {Object.values(navigationLinks).map((links, index) => (
                        <NavigationMenu key={index + links.title}>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className=" gap-sp2">
                                        <span>
                                            <EllipseIcon
                                                className={"text-primary"}
                                            />
                                        </span>
                                        {links.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {links.links.map((link, key) => (
                                            <NavigationMenuLink
                                                data-lenis-prevent
                                                target="_blank"
                                                href={link.link}
                                                className=" gap-2 "
                                                key={key + link.title}
                                            >
                                                <div className="flex items-center  gap-sp4  w-full">
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
                    ))}

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
                <div className="flex gap-sp2 items-center">
                    <ReScanModal
                        onClose={() => setReScanModalOpen(false)}
                        isOpen={reScanModalOpen}
                    />

                    <Button
                        onClick={() => setReScanModalOpen(true)}
                        className="w-full"
                        variant={"default"}
                        size={"md"}
                    >
                        Rescan
                    </Button>
                    <ConnectButton
                        size={"md"}
                        variant="secondary"
                        variantType="button"
                    />
                </div>
            </nav>
            <BurgerMenu />
        </header>
    );
}
