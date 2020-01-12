import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk"
import profileReducer, {profileActionType} from "./profileReducer";
const redcers = combineReducers({
    profile:profileReducer
})
export type AppStore = ReturnType <typeof redcers>
const store = createStore(redcers, applyMiddleware(thunk as ThunkMiddleware<AppStore, profileActionType>))