import { Button } from "components/shared/Button";
import TransferBox from "../TransferBox";
import data from "../data.json";
import { useState } from "react";
import { formatNumber } from "lib/utils";
import { ArrowsUpDown } from "assets/icons";
import { motion } from "framer-motion";

export default function TransferSection() {
    const [transferTo, setTransferTo] = useState<string>("");
    const [transferFrom, setTransferFrom] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    const handleMax = () => {
        console.log(price);
    };
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

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <section className="space-y-sp9">
            <div className="space-y-sp5">
                <div className="space-y-sp7">
                    <motion.div
                        animate={{ y: toggle ? "136%" : "0%" }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <TransferBox
                            onChange={e => {
                                const value = e.target.value;
                                handleCalculatePrice(value);
                                setTransferFrom(e.target.value);
                            }}
                            value={transferFrom}
                            inputType="number"
                            actionButton={
                                <Button onClick={handleMax}>Max</Button>
                            }
                            helperText={`$${formatNumber(price)}`}
                            title="Transfer From"
                            selectItems={data.pactus}
                            placeholder="0"
                            label="Amount"
                        />
                    </motion.div>
                    <div className="flex justify-center">
                        <button
                            className=" bg-gray-800 p-[10px] rounded-[9px] text-white"
                            onClick={handleToggle}
                        >
                            <span className="sr-only">arrows-up-down</span>
                            <ArrowsUpDown />
                        </button>
                    </div>

                    <motion.div
                        animate={{ y: toggle ? "-136%" : "0%" }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <TransferBox
                            onChange={e => setTransferTo(e.target.value)}
                            value={transferTo}
                            actionButton={
                                <Button onClick={handleCopy}>Paste</Button>
                            }
                            title="Transfer To"
                            selectItems={data.companies}
                            label="Destination address in Pactus network"
                            placeholder="EX: pc1zzzvlcqge523yg8re8hgnk72jsfdatncusmf6uy"
                        />
                    </motion.div>
                </div>
                <p className="body-2 text-white">
                    Polygon gas fee ~ 0.0017 ETH <br /> Bridge fee = 1 PAC
                </p>
            </div>
            <Button variant="secondary" size="lg" className="w-full">
                Generate Memo Transaction
            </Button>
        </section>
    );
}
