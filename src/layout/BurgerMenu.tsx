import { Link as ReactRouteLink } from "react-router-dom";
import { BurgerIcon, CloseIcon, EllipseIcon } from "assets/icons";
import { communityLinks, CommunityLinksT, links } from "./links.tsx";
import { ConnectButton } from "components/shared/ConnectButton";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "components/shared/Sheet";
import Link from "components/shared/Link";
import Logo from "assets/svg/logo.svg";
import { useState } from "react";

export default function BurgerMenu() {
    const fullLinks = communityLinks.concat(links as CommunityLinksT[]);

    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-between items-center lg:hidden">
            <Sheet
                open={open}
                onOpenChange={isOpen => {
                    setOpen(isOpen);
                }}
            >
                <SheetTrigger>
                    <BurgerIcon />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="flex flex-row justify-between items-center">
                        <SheetClose>
                            <CloseIcon />
                        </SheetClose>
                        <ReactRouteLink
                            onClick={() => setOpen(false)}
                            draggable={false}
                            to="/"
                        >
                            <img
                                src={Logo}
                                alt="Logo"
                                className="text-primary"
                            />
                        </ReactRouteLink>
                    </SheetHeader>
                    <div className="py-sp9 px-sp5">
                        <ul className=" gap-sp5 flex flex-col ">
                            {fullLinks.map((link, key) => (
                                <li
                                    onClick={() => setOpen(false)}
                                    className=""
                                    key={key}
                                >
                                    <Link
                                        target={
                                            link.link.includes("http")
                                                ? "_blank"
                                                : "_self"
                                        }
                                        to={link.link}
                                        className="body-1 py-[10px]"
                                        variant="primary"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setOpen(false)} className="mt-sp9">
                            <ConnectButton
                                variant="secondary"
                                variantType="link"
                                leftIcon={
                                    <EllipseIcon className="text-secondary" />
                                }
                            />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <ReactRouteLink draggable={false} to="/">
                <img src={Logo} alt="Logo" className="text-primary" />
            </ReactRouteLink>
        </div>
    );
}
