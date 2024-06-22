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
        link: "https://polygonscan.com/address/0x2f77E0afAEE06970Bf860B8267b5aFECFFF6F216",
    },
    {
        title: "Pactus lock address",
        link: "https://pacviewer.com/address/pc1zqyxjatqfhaj3arc727alwl4sa3z8lv2m730eh2",
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
        title: "GitHub",
        description: "GitHub",
        link: "https://github.com/PACZone/wrapto",
        icon: <GithubIcon />,
    },
];
