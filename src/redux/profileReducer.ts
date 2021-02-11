import { apiForProfile } from './../api/apiForProfile';
import { Action, ActionCreator, Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

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
    aboutMe:string | null;
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    contacts: IContacts | null;
    photos: IPhoto | null;
}
export const initialState: IStateProfile = {
    userId: null,
    aboutMe:null,
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
                        ReturnType< typeof setPhotosAC> | ReturnType<typeof setAboutMeActionCreater>

export const setUserIdActionCreater = (userId:number | null) => ({type: interLiteralFromString("SET_USER_ID"), userId})
export const setLookingForAJobAC = (lookingForAJob:boolean | null) => ({type: interLiteralFromString("SET_LOOKING_FOR_A_JOB"), lookingForAJob})
export const setLookingForAJobDescriptionAC = (lookingForAJobDescription:string | null) => ({type: interLiteralFromString("SET_LOOKING_FOR_A_JOB_DESCRIPTION"), lookingForAJobDescription})
export const setFullNameAC = (fullName:string | null) => ({type: interLiteralFromString("SET_FULL_NAME"), fullName})
export const setContactsAC = (contacts:IContacts | null) => ({type: interLiteralFromString("SET_CONTACTS"), contacts})
export const setPhotosAC = (photos:IPhoto | null) =>({type: interLiteralFromString("SET_PHOTOS"), photos})
export const setAboutMeActionCreater = (aboutMe:string | null) => ({type: interLiteralFromString("SET_ABOUT_ME"), aboutMe})



const profileReducer = (state: IStateProfile = initialState, action: profileActionType) => {
    
    
    switch (action.type) {
        case "SET_USER_ID":
            return {
                ...state,
                userId: action.userId
            }
        case "SET_ABOUT_ME":
            return {
                ...state,
                aboutMe:action.aboutMe
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
//:ActionCreator<ThunkAction<Promise<any>,IStateProfile,null,AnyAction>>
export const getDataProfileThunk:ActionCreator<ThunkAction<Promise<void>,IStateProfile,null,profileActionType>> =(userId:number)=>{
    return async (dispatch:Dispatch<profileActionType>) =>{
       const response = await apiForProfile.getProfileData(userId)
       dispatch(setAboutMeActionCreater(response.data.aboutMe))
       dispatch(setUserIdActionCreater(response.data.userId))
       dispatch(setFullNameAC(response.data.fullName))
       dispatch(setLookingForAJobAC(response.data.lookingForAJob))
       dispatch(setLookingForAJobDescriptionAC(response.data.lookingForAJobDescription))
       dispatch(setContactsAC(response.data.contacts))
       dispatch(setPhotosAC(response.data.photos))
    }
}

export default profileReducer