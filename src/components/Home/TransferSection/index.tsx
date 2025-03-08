import { ConnectButton } from "components/shared/ConnectButton";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { networks } from "wagmi/networks";
import BridgeToPacButton from "./BridgeToPacButton";
import BridgeFromPacButton from "./BridgeFromPacButton";
import TransferBoxes from "./TransferBoxes";
import { useTransferBoxContext } from "context/TransferBoxContext";

export default function TransferSection() {
    const {
        network,
        animationKey,
        isFromPac,
        transferToError,
        transferFromError,
    } = useTransferBoxContext();

    const { isConnected } = useAccount();
    const account = useAccount();
    return (
        <form
            id="transfer-section"
            onSubmit={e => {
                e.preventDefault();
            }}
            className="space-y-sp9 max-w-[884px] mx-auto mb-[52px]"
        >
            <div className="space-y-sp5">
                <TransferBoxes
                    isConnected={isConnected}
                    address={account.address}
                />
            </div>
            <div
                className="transition-all animate-duration-[1000ms] animate-fade"
                key={animationKey + 3}
            >
                {isFromPac ? (
                    <>
                        <BridgeFromPacButton
                            disabled={!!transferToError || !!transferFromError}
                        />
                    </>
                ) : isConnected && !isFromPac ? (
                    <BridgeToPacButton
                        disabled={
                            account.chainId !== networks[network].chainId ||
                            !!transferToError ||
                            !!transferFromError
                        }
                    />
                ) : (
                    <ConnectButton variantType="button" />
                )}
            </div>
        </form>
    );
}
