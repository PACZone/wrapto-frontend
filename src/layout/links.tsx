import { DiscordIcon, GithubIcon } from "assets/icons";

type LinkT = {
    title: string;
    link: string;
};
export type CommunityLinksT = {
    title: string;
    description: string;
    link: string;
    icon: JSX.Element;
};
export const links: LinkT[] = [
    {
        title: "wPAC on Polygon",
        link: "https://amoy.polygonscan.com/token/0x56d09db604b815e4322ca825d5eb10a6a9938d92?a=0x56d09db604b815e4322ca825d5eb10a6a9938d92",
    },
    {
        title: "Pactus Lock Address",
        link: "http://pactus-phoenix1.dezh.tech/account/address/tpc1zlymfcuxlgvvuud2q4zw0scllqn74d2f90hld6w",
    },
    {
        title: "Recent transactions",
        link: "/transactions",
    },
];

export const communityLinks: CommunityLinksT[] = [
    {
        title: "Discord",
        description: "Join Wrapto on Discord",
        link: "https://discord.gg/8GAKqgjg99",
        icon: <DiscordIcon />,
    },
    {
        title: "Github",
        description: "GitHub",
        link: "https://github.com/PACZone/wrapto",
        icon: <GithubIcon />,
    },
];
