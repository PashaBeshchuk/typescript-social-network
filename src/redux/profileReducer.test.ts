import profileReducer, {setUserIdActionCreater, setLookingForAJobAC, 
    setLookingForAJobDescriptionAC, setFullNameAC, 
    setContactsAC, setPhotos, IState} from "./profileReducer"

describe("Test for profile Reducer",()=>{
    let state:IState = {
        userId:null,
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
    test( "Action creater for userId",()=>{
        let actionForUserId = setUserIdActionCreater(485)
        let newState = profileReducer(state, actionForUserId)
        expect(newState.userId).toBe(485)
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
        let actionPhotos = setPhotos(photos)
        let newState = profileReducer(state, actionPhotos)
        expect(newState.photos?.small).toBe("small")
        expect(newState.photos?.large).toBe("large")
    })
})