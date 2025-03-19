import {
    DiscordIcon,
    GithubIcon,
    BinanceIcon,
    PolygonIcon,
    BaseNetworkIcon,
} from "assets/icons";

export type LinkT = {
    title: string;
    link: string;
};
export type NavigationLinksT = {
    title: string;
    description: string;
    link: string;
    icon: JSX.Element;
};
export const links: LinkT[] = [
    {
        title: "Pactus lock address",
        link: "https://pacviewer.com/address/pc1zqyxjatqfhaj3arc727alwl4sa3z8lv2m730eh2",
    },
    {
        title: "Recent transactions",
        link: "/transactions",
    },
];

export const communityLinks: NavigationLinksT[] = [
    {
        title: "Discord",
        description: "Join Wrapto on Discord",
        link: "https://discord.gg/8GAKqgjg99",
        icon: <DiscordIcon />,
    },
    {
        title: "GitHub",
        description: "Our source code",
        link: "https://github.com/PACZone/wrapto",
        icon: <GithubIcon />,
    },
];
export const wPACOnLinks: NavigationLinksT[] = [
    {
        title: "On Polygon",
        link: "https://polygonscan.com/token/0x2f77E0afAEE06970Bf860B8267b5aFECFFF6F216",

        description: "Wpac token on explorer",
        icon: <PolygonIcon />,
    },
    {
        title: "On Binance Smart Chain",
        description: "Wpac token on explorer",
        link: "https://bscscan.com/token/0x10004a9A742ec135c686C9aCed00FA3C93D66866",
        icon: <BinanceIcon />,
    },
    {
        title: "On Base",
        description: "Wpac token on explorer",
        link: "https://basescan.org/token/0x10004a9A742ec135c686C9aCed00FA3C93D66866",
        icon: <BaseNetworkIcon />,
    },
];

export const navigationLinks = {
    community: { title: "Community", links: communityLinks },
    wPACOn: { title: "wPAC tokens", links: wPACOnLinks },
};
