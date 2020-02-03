import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk, thunkMiddleware} from "react-redux"
import profileReducer, {profileActionType} from "./profileReducer";
const redcers = combineReducers({
    profile:profileReducer
})
export type AppStore = ReturnType <typeof redcers>
const store = createStore(redcers, applyMiddleware(thunkMiddleware(thunk as thunkMiddleware<AppStore, profileActionType>)))