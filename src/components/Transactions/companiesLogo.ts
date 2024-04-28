import { networks } from "wagmi/networks";

export const companiesLogo = {
    POLYGON_PACTUS: {
        srcFrom: "/companies/polygon.svg",
        srcTo: "/companies/pactus.svg",
        chainFrom: "Polygon Network",
        chainTo: "Pactus Network",
        explorer:networks["pac"].explorer
    },
    PACTUS_POLYGON: {
        srcFrom: "/companies/pactus.svg",
        srcTo: "/companies/polygon.svg",
        chainFrom: "Pactus Network",
        chainTo: "Polygon Network",
        explorer:networks["amoy"].explorer

    },
};