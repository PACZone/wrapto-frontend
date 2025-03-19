 export type ContractAddressT =`0x${string}`


type NetworkT= {
    name: string;
    contractAddress: ContractAddressT;
    explorer: string;
    rpcUrl?: string;
    chainId?: number;
    symbol?: string;
}

export const networks: Record<string, NetworkT> = {
  amoy: {
    name: "Matic",
    contractAddress: "0x2f77E0afAEE06970Bf860B8267b5aFECFFF6F216",
    explorer: "https://polygonscan.com/tx",
    rpcUrl: "https://polygon-rpc.com",
    chainId: 137,
    symbol: "MATIC",
  },
  pac: {
    name: "PAC",
    contractAddress: "0x",
    explorer: "https://pacviewer.com/transaction",
    symbol: "PAC",
  },
  base: {
    name: "Base",
    contractAddress: "0x10004a9A742ec135c686C9aCed00FA3C93D66866",
    explorer: "https://basescan.org/tx",
    rpcUrl: "https://mainnet.base.org",
    chainId: 8453,
    symbol: "ETH",
  },
  bsc: {
    name: "Binance Smart Chain",
    contractAddress: "0x10004a9A742ec135c686C9aCed00FA3C93D66866", 
    explorer: "https://bscscan.com/tx",
    rpcUrl: "https://bsc-dataseed.binance.org/",
    chainId: 56,
    symbol: "BNB",
  },
};

