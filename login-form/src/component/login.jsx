import axios from "axios"
import { useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { loginFailur, loginPost, loginRequest, loginSucess } from "../Redux/action"
import {useNavigate} from "react-router-dom"


export const Login=()=>{
    const [text,setText]=useState({
        email:"",
        password:""
    })
    const {token,loading,error,isAuth}=useSelector((store)=>store.login)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})

    }
    const handleLogin=()=>{
        // dispatch(loginRequest())
        // axios.post("https://reqres.in/api/login",text).then((d)=>dispatch(loginSucess(d.data.token))).catch((err)=>{
        //     dispatch(loginFailur(err))
        // })
        dispatch(loginPost(text))

    }
    if(isAuth){
         navigate("/")
    }
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            width: "40%",
            margin:"auto",
        }}>
            <input type="text" name="email" id="" onChange={handleChange} />
            <input type="text" name="password" id="" onChange={handleChange}/>
            <button onClick={()=>{handleLogin()
                

            }}>LOGIN</button>
            {/* <h1>{error?"error is happend":"error is not happend"}</h1> */}
            <h1>{token}</h1>
            <h1>{error}</h1>

            
        </div>
    )
}