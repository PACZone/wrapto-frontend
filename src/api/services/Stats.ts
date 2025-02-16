
import { SuccessDataT } from "types/apiResult"
import { BASE_INSTANCE } from "../constant" 
 
export type StatsResponseT = {
    total_successful_bridges:number;
    total_wpacs:number;
    total_locked_pacs:number;
}
export const getStats = () : Promise<SuccessDataT<StatsResponseT>>=> {
    return BASE_INSTANCE.get(`/state/stats`)
}