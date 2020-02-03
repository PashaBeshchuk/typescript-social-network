import React from "react"
import { NavLink } from "react-router-dom"

const Navbar:React.FC = () =>{
    return (
        <div>
            <div><NavLink to="/profile">Profile</NavLink> </div>   
            <div> <NavLink to="/users">Users</NavLink></div>
            <div><NavLink to="/login">Login</NavLink></div>
              
                
        </div>
    )
}

export default Navbar