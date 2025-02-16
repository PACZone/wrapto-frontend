import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { buttonVariants } from "./Button";
import { cn } from "lib/utils";
import { linkVariants } from "./Link";
import { ReactNode } from "react";

type ComponentProps<T extends keyof JSX.IntrinsicElements> = {
    variant?: "secondary" | null | undefined;
    size?: "default" | "lg" | "md" | null | undefined;
    className?: string;
    variantType?: "button" | "link";
    leftIcon?: ReactNode;
} & Omit<JSX.IntrinsicElements[T], "variant" | "size" | "className">;

export const ConnectButton = <T extends keyof JSX.IntrinsicElements>({
    variant = "secondary",
    size,
    className,
    variantType,
    leftIcon,
}: ComponentProps<T>) => {
    const styleVariants =
        variantType === "button" ? buttonVariants : linkVariants;

    return (
        <RainbowConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected = ready && account && chain;
                // &&
                // (!authenticationStatus ||
                //     authenticationStatus === "authenticated");
                // if (account) setAccount && setAccount(account);

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                        className="w-full"
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button
                                        className={cn(
                                            styleVariants({
                                                variant,
                                                size,
                                                className,
                                            }),
                                            "!w-full",
                                        )}
                                        onClick={openConnectModal}
                                        type="button"
                                    >
                                        {leftIcon && <span>{leftIcon}</span>}
                                        Connect Wallet
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button
                                        className={cn(
                                            styleVariants({
                                                variant,
                                                size,
                                                className,
                                            }),
                                            "!w-full",
                                        )}
                                        onClick={openChainModal}
                                        type="button"
                                    >
                                        {leftIcon && <span>{leftIcon}</span>}
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div style={{ display: "flex", gap: 12 }}>
                                    <button
                                        className={cn(
                                            "w-full",
                                            styleVariants({
                                                variant,
                                                size,
                                                className,
                                            }),
                                        )}
                                        onClick={openChainModal}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        type="button"
                                    >
                                        {leftIcon && <span>{leftIcon}</span>}

                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background:
                                                        chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={
                                                            chain.name ??
                                                            "Chain icon"
                                                        }
                                                        src={chain.iconUrl}
                                                        style={{
                                                            width: 12,
                                                            height: 12,
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {chain.name}
                                    </button>
                                    <button
                                        className={cn(
                                            "w-full",
                                            styleVariants({
                                                variant,
                                                size,
                                                className,
                                            }),
                                        )}
                                        onClick={openAccountModal}
                                        type="button"
                                    >
                                        {leftIcon && <span>{leftIcon}</span>}

                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ""}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </RainbowConnectButton.Custom>
    );
};
