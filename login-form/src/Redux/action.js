import { LOGIN_FAILUR, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType";
import axios from "axios"

export const loginRequest=(payload)=>({
    type:LOGIN_REQUEST,
    payload

})
export const loginSucess=(payload)=>({
    type:LOGIN_SUCESS,
    payload


})
export const loginFailur=(payload)=>({
    type:LOGIN_FAILUR,
    payload
})
export const loginPost=(payload)=>{
    return (dispatch)=>{
        dispatch(loginRequest())
        axios.post("https://reqres.in/api/login",payload).then((d)=>dispatch(loginSucess(d.data.token))).then((err)=>dispatch(loginFailur(err)))
        


    }
}