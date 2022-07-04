import { LOGIN_FAILUR, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType"
let token;

const init={
    isAuth:token ? true:false,
    token:token||"",
    error:false,
    loading:false
}
export const loginReducer=(store=init ,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...store,loading:true,error:false}
        case LOGIN_SUCESS:
            return {...store,loading:false,error:false,isAuth:true,token:payload}
        case LOGIN_FAILUR:
            return {...store,loading:false,error:true}
        default:
            return {...store}
    }

}