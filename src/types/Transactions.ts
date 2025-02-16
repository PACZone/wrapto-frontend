import { BridgeType } from "constants/enums/txEnums";

export type TransactionT = {
    id:string
    from: string;
    to: string;
    amount: number;
    fee: number;
    date: string;
    status: string;
    tx_id: string;
    bridge_type: BridgeType;
};