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
    contractAddress:'0x56D09Db604B815E4322CA825D5EB10a6a9938d92',
    explorer:"https://amoy.polygonscan.com/tx",
    rpcUrl:"https://polygon-amoy.infura.io/v3/ebf2aa9568884ba0aceb39bc35377102",
    chainId:80002,
    symbol:"MATIC"
  },
  pac:{
    name: 'PAC',
    contractAddress:'0xex',
    explorer:"https://pactus-phoenix1.dezh.tech/transaction/id",
    symbol:"PAC"
  }
}