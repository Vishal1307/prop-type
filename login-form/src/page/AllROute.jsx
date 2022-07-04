import {Routes,Route} from "react-router-dom"
import { Login } from "../component/login"
import { Todo } from "../component/todo"
export const AllRoute=()=>{
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/todo" element={<Todo/>}></Route>
            </Routes>
        </div>
    )
}