 
import { BASE_INSTANCE } from "../constant" 

export const getRescanHash = (id:string) => {
    return BASE_INSTANCE.get(`/rescan/${id}`)
}

 