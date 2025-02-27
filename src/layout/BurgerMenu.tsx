import { Link as ReactRouteLink } from "react-router-dom";
import { BurgerIcon, CloseIcon } from "assets/icons";
import { links, navigationLinks, LinkT } from "./links.tsx";
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
import ReScanModal from "./RescanModal.tsx";
import { Button } from "components/shared/Button.tsx";

export default function BurgerMenu() {
    const fullLinks: LinkT[] = [
        ...links,
        ...Object.entries(navigationLinks).flatMap(([key, { title, links }]) =>
            links.map(link => ({
                ...link,
                title: key === "wPACOn" ? `${title} ${link.title}` : link.title,
            })),
        ),
    ];
    const [open, setOpen] = useState(false);
    const [reScanModalOpen, setReScanModalOpen] = useState(false);
    return (
        <div className="flex justify-between items-center xl:hidden">
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
                        <div
                            onClick={() => setOpen(false)}
                            className="flex flex-col gap-sp2 items-center mt-sp9"
                        >
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
                    </div>
                </SheetContent>
            </Sheet>
            <ReScanModal
                onClose={() => setReScanModalOpen(false)}
                isOpen={reScanModalOpen}
            />
            <ReactRouteLink draggable={false} to="/">
                <img src={Logo} alt="Logo" className="text-primary" />
            </ReactRouteLink>
        </div>
    );
}
