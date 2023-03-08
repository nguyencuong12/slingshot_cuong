import { MainAxios } from "@/axios/mainAxios"
const url = "/search"
export const SearchAPI = {
    search:(searchInput:string)=>{
        return MainAxios({
            method:"GET",
            url:url,
            params:{
                searchInput
            }
        })
    }

}