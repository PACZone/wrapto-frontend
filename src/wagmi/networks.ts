 export type ContractAddressT =`0x${string}`


type NetworkT= {
    name: string;
    contractAddress: ContractAddressT;
    explorer: string;
    rpcUrl?: string;
    chainId?: number;
    symbol?: string;
}

export const networks : Record<string,NetworkT>={
  amoy:{
    name: 'MATIC',
    contractAddress:'0x2f77E0afAEE06970Bf860B8267b5aFECFFF6F216',
    explorer:"https://polygonscan.com/tx",
    rpcUrl:"https://polygon-rpc.com",
    chainId:137,
    symbol:"MATIC"
  },
  pac:{
    name: 'PAC',
    contractAddress:'0x',
    explorer:"https://pacviewer.com/transaction",
    symbol:"PAC"
  }
}
