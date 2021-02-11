import configureMockStore from "redux-mock-store"
import thunk, { ThunkMiddleware } from "redux-thunk"
import fetchMock from "fetch-mock"
import profileReducer, {initialState, setUserIdActionCreater, setLookingForAJobAC, 
    setLookingForAJobDescriptionAC, setFullNameAC, 
    setContactsAC, setPhotosAC, IStateProfile, getDataProfileThunk, setAboutMeActionCreater, profileActionType} from "./profileReducer"
import { requestPath } from '../api/instance';
import { Dispatch, AnyAction } from 'redux';
import { AppStore } from "./Store";

const middlewares = [thunk as ThunkMiddleware<AppStore, profileActionType>]
const mockStore = configureMockStore(middlewares)
let dataContacts = {
    github:"github",
    vk:"vk",
    facebook:"facebook",
    instagram:"instagram",
    twitter:"twitter",
    website:"website",
    youtube:"youtube",
    mainLink:"mainLink",
}
let state:IStateProfile = {
    userId:null,
    aboutMe:null,
    lookingForAJob:null,
    lookingForAJobDescription:null,
    fullName:null,
    contacts:{
        github:null,
        vk:null,
        facebook:null,
        instagram:null,
        twitter:null,
        website:null,
        youtube:null,
        mainLink:null,
    },
    photos:{
        small:null,
        large:null
    }
}


describe("Test for profile Reducer",()=>{
    

    test( "Action creater for userId",()=>{
        let actionForUserId = setUserIdActionCreater(485)
        let newState = profileReducer(state, actionForUserId)
        expect(newState.userId).toBe(485)
    })
    test("Action creater for aboutMe", ()=>{
        let actionForAboutMe = setAboutMeActionCreater("He mobi")
        let newState = profileReducer(state, actionForAboutMe)
        expect(newState.aboutMe).toBe("He mobi")
    })
    test("Action creater for lookingForAJob", ()=>{
        let actionLookingForAJob = setLookingForAJobAC(true)
        let newState = profileReducer(state, actionLookingForAJob)
        expect(newState.lookingForAJob).toBe(true)
    })
    test("Action creater for lookingForAJobDescription", ()=>{
        let actionLookingForAJobDescription = setLookingForAJobDescriptionAC("hi")
        let newState = profileReducer(state, actionLookingForAJobDescription)
        expect(newState.lookingForAJobDescription).toBe("hi")
    })
    test("Action creater for fullName", ()=>{
        let actionFullName = setFullNameAC("Паша Бещук")
        let newState = profileReducer(state, actionFullName)
        expect(newState.fullName).toBe("Паша Бещук")
    })
    test("Action creater for contacts", ()=>{
       
        let actionContacts = setContactsAC(dataContacts)
        let newState = profileReducer(state, actionContacts)
        expect(newState.contacts?.github).toBe("github")
        expect(newState.contacts?.instagram).toBe("instagram")
        expect(newState.contacts?.youtube).toBe("youtube")
    })
    test("Action creater for photos", ()=>{
        let photos = {
            small:"small", 
            large:"large"
        }
        let actionPhotos = setPhotosAC(photos)
        let newState = profileReducer(state, actionPhotos)
        expect(newState.photos?.small).toBe("small")
        expect(newState.photos?.large).toBe("large")
    })
})

describe("Tests for Thunks profileData",()=>{
    afterEach(()=>{
        fetchMock.reset()
        fetchMock.restore()
    })
    test( "getProfileDataThunk get profile data",async()=>{
        let userId = 485
        fetchMock.getOnce(`${requestPath}/profile/${userId}`,{
            headers:{"content-type":"aplicaton/json"},
            body:{data:{
                userId: 485,
                aboutMe:"Hello Word",
                lookingForAJob: false,
                lookingForAJobDescription: "I want to work",
                fullName: "Pasha Beshchuk",
                contacts: dataContacts,
                photos: { small:"", large:"" }
            }, status:200}
        })
        const expectedActionCreater = [
            setUserIdActionCreater(485), setAboutMeActionCreater("Hello Word"),
            setLookingForAJobAC(false), 
            setLookingForAJobDescriptionAC("I want to work"), setFullNameAC("Pasha Beshchuk"),
            setContactsAC(dataContacts), setPhotosAC({ small:"", large:"" })
        ]
        const store = mockStore({})
        return store.dispatch<any>(getDataProfileThunk(userId)).then(()=>{
            expect(store.getActions()).toBe(expectedActionCreater)
        })
    })  
})