import {IStateProfile} from "../redux/profileReducer"
import {instance} from "./instance"
import { AxiosResponse } from "axios"
interface ApiForProfile {
    getProfileData:(userId:number)=>Promise<AxiosResponse<IStateProfile>>
}  
export const apiForProfile:ApiForProfile = {
    getProfileData:(userId)=>{
        return instance.get(`/profile/${userId}`)
    }
}





