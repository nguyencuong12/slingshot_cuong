
import { MainAxios } from "@/axios/mainAxios"
export const ImageAPI  = {
        getImageFromID:async(id:string)=>{
           await  MainAxios.get(`image/${id}`);
        }
}


