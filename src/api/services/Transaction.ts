
import { SuccessDataT } from "types/apiResult"
import { BASE_INSTANCE } from "../constant"
import { TransactionT } from "types/Transactions"

export const searchServices = (data:string) => {
    return BASE_INSTANCE.get(`/search?q=${data}`)
}

export const getTransactions = () : Promise<SuccessDataT<TransactionT[]>>=> {
    return BASE_INSTANCE.get(`/transactions/recent`)
}