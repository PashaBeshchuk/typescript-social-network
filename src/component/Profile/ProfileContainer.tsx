import React, { useEffect } from "react"
import { connect } from "react-redux"
import { AppStore } from "../../redux/Store"
import { getDataProfileThunk, profileActionType } from "../../redux/profileReducer"
import { bindActionCreators } from "redux"
import { ThunkDispatch } from "redux-thunk"
import Profile from "./Profile"

const ProfileContainer:React.FC<IListTypesProfile> = (props) => {
    useEffect(()=>{
        props.getDataProfileThunk(4983)
    })
    return <div><Profile /></div>
}

type IListTypesProfile = dispatchPropsType & mapeStateType
type dispatchPropsType = {
    getDataProfileThunk:(userId:number)=>void
}

type mapeStateType = {
    userId:number | null
}
const mapDispatchToProps = (dispatch:ThunkDispatch < any, any, profileActionType >):dispatchPropsType => ({
    getDataProfileThunk:bindActionCreators(getDataProfileThunk, dispatch)
})
const mapStateToProps = (state:AppStore):mapeStateType => ({
    userId:state.profile.userId
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
