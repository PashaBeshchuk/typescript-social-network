import { apiForProfile } from './../api/apiForProfile';
import { Dispatch } from 'redux';
interface IPhoto {
    small: string | null;
    large: string | null;
}
interface IContacts {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
}
export interface IStateProfile {
    userId: number | null;
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    contacts: IContacts | null;
    photos: IPhoto | null;
}
const initialState: IStateProfile = {
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: null,
    photos: null,
}

const interLiteral = <O, T extends O>(value: T): T => {
    return value
}
const interLiteralFromString = <T extends string>(arg: T): T => {
    return interLiteral(arg)
}

export type profileActionType = ReturnType< typeof setUserIdActionCreater> | ReturnType< typeof  setLookingForAJobAC> |
                        ReturnType< typeof setLookingForAJobDescriptionAC> | 
                        ReturnType< typeof setFullNameAC> | ReturnType< typeof  setContactsAC> | 
                        ReturnType< typeof setPhotos>

export const setUserIdActionCreater = (userId:number) => ({type: interLiteralFromString("SET_USER_ID"), userId})
export const setLookingForAJobAC = (lookingForAJob:boolean) => ({type: interLiteralFromString("SET_LOOKING_FOR_A_JOB"), lookingForAJob})
export const setLookingForAJobDescriptionAC = (lookingForAJobDescription:string) => ({type: interLiteralFromString("SET_LOOKING_FOR_A_JOB_DESCRIPTION"), lookingForAJobDescription})
export const setFullNameAC = (fullName:string) => ({type: interLiteralFromString("SET_FULL_NAME"), fullName})
export const setContactsAC = (contacts:IContacts) => ({type: interLiteralFromString("SET_CONTACTS"), contacts})
export const setPhotos = (photos:IPhoto) =>({type: interLiteralFromString("SET_PHOTOS"), photos})



const profileReducer = (state: IStateProfile = initialState, action: profileActionType) => {
    
    
    switch (action.type) {
        case "SET_USER_ID":
            return {
                ...state,
                userId: action.userId
            }
        case "SET_LOOKING_FOR_A_JOB":
            return {
                ...state,
                lookingForAJob: action.lookingForAJob
            }
        case "SET_LOOKING_FOR_A_JOB_DESCRIPTION":
            return {
                ...state,
                lookingForAJobDescription: action.lookingForAJobDescription
            }
        case "SET_FULL_NAME":
            return {
                ...state,
                fullName: action.fullName
            }
        case "SET_CONTACTS":
            return {
                ...state,
                contacts: action.contacts
            }
        case "SET_PHOTOS":
            return {
                ...state,
                photos: action.photos
            }
        default:
            return state
    }
}

export const getDataProfileThunk=(userId:number)=>{
    return async (dispatch:Dispatch) =>{
        const response = await apiForProfile.getProfileData(userId)
       console.log(response)
    }
}

export default profileReducer