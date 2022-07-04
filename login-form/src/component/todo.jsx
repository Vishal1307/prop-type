import { useEffect, useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import { store } from "../Redux/store"
import { addTodo, deleteTodo, getTodo, highTodo, lowTodo } from "../Redux/todo/action"
import {Link} from "react-router-dom"

export const Todo=()=>{
    const [text,setText]=useState({
        item:""
    })
    const {loading,error,todo}=useSelector((store)=>store.todo)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})

    }
    const handleSubmit=()=>{
        dispatch(addTodo(text))

    }
    useEffect(()=>{
        dispatch(getTodo())

    },[dispatch])
    const cartChange=(e)=>{
        if(e.target.value=="low"){
            dispatch(lowTodo())
        }
        else if(e.target.value=="high"){
            dispatch(highTodo())
        }

    }
    return (
        <div>
            <h1>TODO_ITEM</h1>
            <div>
                <select name="" id="" onChange={cartChange}>
                    <option value="">selectIt</option>
                    <option value="low">lowToHigh</option>
                    <option value="high">highToLow</option>
                </select>
            </div>
            <div>
                <input type="text" name="item" id=""  onChange={handleChange}/>
                <button onClick={()=>{
                    handleSubmit()
                    

                }}>Add</button>
            </div>
            <div>
                {todo.map((cv)=>{
                    return <div>
                        <Link to={`/${cv.id}`}>{cv.item}</Link>
                        <button onClick={()=>{
                            dispatch(deleteTodo(cv.id))
                        }}>DEL</button>
                    </div>
                })}
            </div>

        </div>
    )
}