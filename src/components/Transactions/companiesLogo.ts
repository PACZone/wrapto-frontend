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
    BSC_PACTUS: {
        srcFrom: "/companies/binance-smart-chain.svg",
        srcTo: "/companies/pactus.svg",
        chainFrom: "Binance Smart Chain Network",
        chainTo: "Pactus Network",
        explorer:networks["pac"].explorer
    },
    PACTUS_BSC: {
        srcFrom: "/companies/pactus.svg",
        srcTo: "/companies/binance-smart-chain.svg",
        chainFrom: "Pactus Network",
        chainTo: "Binance Smart Chain Network",
        explorer:networks["bsc"].explorer
    },

    
    BASE_PACTUS: {
        srcFrom: "/companies/baseBlockchain.svg",
        srcTo: "/companies/pactus.svg",
        chainFrom: "Base Network",
        chainTo: "Pactus Network",
        explorer:networks["pac"].explorer
    },
    PACTUS_BASE: {
        srcFrom: "/companies/pactus.svg",
        srcTo: "/companies/baseBlockchain.svg",
        chainFrom: "Pactus Network",
        chainTo: "Base Network",
        explorer:networks["base"].explorer
    },
};