import { Button } from "components/shared/Button";
import TransferBox from "../TransferBox";
import data from "../data.json";
import { useState } from "react";
import { cn, formatNumber } from "lib/utils";
import { ArrowsUpDown } from "assets/icons";

export default function TransferSection() {
    const [transferTo, setTransferTo] = useState<string>("");
    const [transferFrom, setTransferFrom] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    const handleCopy = async () => {
        await navigator.clipboard.readText().then(text => {
            setTransferTo(text);
        });
    };
    const handleCalculatePrice = (value: string) => {
        const calculatedPrice = +value / 1.99;
        setPrice(calculatedPrice);
    };

    const [toggle, setToggle] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const handleToggle = () => {
        setToggle(!toggle);
        setAnimationKey(prevKey => prevKey + 1);
    };

    return (
        <section className="space-y-sp9 max-w-[884px] mx-auto">
            <div className="space-y-sp5">
                <div className="space-y-sp7">
                    <div>
                        <TransferBox
                            key={animationKey}
                            onChange={e => {
                                const value = e.target.value;
                                handleCalculatePrice(value);
                                setTransferFrom(e.target.value);
                            }}
                            leading={toggle ? "PAC" : "POL"}
                            value={transferFrom}
                            inputType="number"
                            // actionButton={
                            //     <Button onClick={handleMax}>Max</Button>
                            // }
                            helperText={`$${formatNumber(price)}`}
                            title="Transfer From"
                            selectItems={toggle ? data.pactus : data.companies}
                            placeholder="0"
                            label="Amount"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className=" bg-gray-800 p-[10px] rounded-[9px] text-white "
                            onClick={handleToggle}
                        >
                            <span className="sr-only">arrows-up-down</span>
                            <ArrowsUpDown
                                key={animationKey + 5}
                                className="animate-rotate-x animate-duration-[1000ms]"
                            />
                        </button>
                    </div>

                    <div>
                        <TransferBox
                            key={animationKey + 1}
                            onChange={e => setTransferTo(e.target.value)}
                            value={transferTo}
                            actionButton={
                                <Button onClick={handleCopy}>Paste</Button>
                            }
                            title="Transfer To"
                            selectItems={toggle ? data.companies : data.pactus}
                            label="Destination address in Pactus network"
                            placeholder="EX: pc1zzzvlcqge523yg8re8hgnk72jsfdatncusmf6uy"
                        />
                    </div>
                </div>
                <p
                    className={cn(
                        "body-2 text-white transition-all duration-300",
                    )}
                >
                    Polygon gas fee ~ 0.0017 ETH <br /> Bridge fee = 1 PAC
                </p>
            </div>
            <Button
                key={animationKey + 3}
                variant="secondary"
                size="lg"
                className={cn("w-full  transition-all ")}
            >
                <span className=" animate-duration-[1000ms] animate-fade">
                    {!toggle ? "Connect Wallet" : " Generate Memo Transaction"}
                </span>
            </Button>
        </section>
    );
}
