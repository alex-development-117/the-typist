import React from "react"
import {useHistory} from "react-router-dom"

const getPathByRol = (rol:string):string => {
    return rol==='USER'?'/play':'/adminUsers'
}

const USER_LOGIN_AUTHENTICATED = "User authenticated!!"
const USER_LOGIN_REJECTED = "The user or the password are incorrect";

const constants = {
    getPathByRol,
    USER_LOGIN_AUTHENTICATED,
    USER_LOGIN_REJECTED
}

export default constants;