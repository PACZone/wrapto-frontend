import SharpBorder from "assets/svg/sharpBorder.svg";
import { Button } from "components/shared/Button";
import { TextField } from "components/shared/TextField";
import { motion } from "framer-motion";

import CopyButton from "./CopyButton";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TransactionMemo() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const transferTo = searchParams.get("transferTo");
    const PACTUS_WALLET = "tpc1zlymfcuxlgvvuud2q4zw0scllqn74d2f90hld6w";
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background max-w-[732px] mx-auto lg:mt-sp12 mb-11"
        >
            <div className="relative border-x border-t border-gray-700  flex flex-col items-center rounded-t-xl pt-sp8 gap-sp8  px-sp7 w-full">
                <div className="p-sp4 bg-gray-800 space-y-[10px]  font-thin rounded-md">
                    <h3 className="title-1 text-secondary">Instructions</h3>
                    <p className="text-gray-50 body-1">
                        Dear user! You must transfer the requested amount of
                        coins to the wallet address below to bridge the coin
                        amount. Copy the Memo Transaction from the Reach Text
                        below and paste it into your Memo Transaction.
                    </p>
                </div>
                <div className="space-y-sp5  w-full">
                    <label className="body-2 text-gray-100">
                        Transaction Memo
                    </label>
                    <div className="border border-gray-900 rounded-xl p-sp5 text-gray-400">
                        <p className=" min-h-[114px]">{transferTo}@POLYGON</p>
                        <CopyButton text={`${transferTo}@POLYGON` ?? ""} />
                    </div>
                </div>
                <TextField
                    labelClasses="!text-gray-100"
                    parentClasses="w-full"
                    label="Wrapto Wallet Address:"
                    className="text-gray-400"
                    value={PACTUS_WALLET ?? ""}
                    readOnly
                    rightIcon={<CopyButton text={PACTUS_WALLET} />}
                />
                <Button
                    onClick={() => navigate("/")}
                    variant="secondary"
                    className="w-full"
                >
                    Back To Home
                </Button>

                <div className="bg-background h-1  z-10 absolute -bottom-1 w-full "></div>
            </div>
            <img src={SharpBorder} alt="SharpBorder" className="w-full" />
        </motion.section>
    );
}
