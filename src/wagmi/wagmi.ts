import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// import { http, createConfig } from 'wagmi'
import { arbitrum, base, mainnet, optimism, polygon, sepolia, zora } from 'wagmi/chains'
// import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'


export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    sepolia
  ],
  ssr: false,
});
