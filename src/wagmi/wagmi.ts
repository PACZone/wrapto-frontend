import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygon , bsc , base} from 'viem/chains';


export const config = getDefaultConfig({
  appName: 'Wrapto',
  projectId: '412518712bdfdffa4c475e1d23133393',
  chains: [
    polygon,
    bsc,
    base
  ],
  ssr: false,
});
