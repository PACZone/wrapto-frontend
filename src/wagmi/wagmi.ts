import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygonAmoy } from 'viem/chains';


export const config = getDefaultConfig({
  appName: 'Wrapto',
  projectId: '339296f0d3af3f76bce150594097de48',
  chains: [
    // mainnet,
    polygonAmoy,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    // zora,
    // sepolia
  ],
  ssr: false,
});
