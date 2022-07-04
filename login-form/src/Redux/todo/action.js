import { ADD_TODO_FAILUR, ADD_TODO_REQUES, ADD_TODO_SUCESS, DEL_TODO, GET_TODO_FAILUR, GET_TODO_REQUES, GET_TODO_SUCESS, HIGH_TODO, LOW_TODO } from "./actionType";
import axios from "axios"

export const addTodoRequest=()=>({
    type:ADD_TODO_REQUES
})
export const addTodoSucess=(payload)=>({
    type:ADD_TODO_SUCESS,
    payload
})
export const addTodoFailur=(payload)=>({
    type:ADD_TODO_FAILUR,
    payload
})
export const getTodoRequest=()=>({
    type:GET_TODO_REQUES
})
export const getTodoSucess=(payload)=>({
    type:GET_TODO_SUCESS,
    payload
})
export const getTodoFailur=(payload)=>({
    type:GET_TODO_FAILUR,
    payload
})
export const delTodo=(payload)=>({
    type:DEL_TODO,
    payload

})
export const lowTodo=(payload)=>({
    type:LOW_TODO,
    payload

})
export const highTodo=(payload)=>({
    type:HIGH_TODO,
    payload
})
export const addTodo=(payload)=>{
    return (dispatch)=>{
        axios.post(" http://localhost:3002/todos",payload).then((d)=>{
            dispatch(addTodoSucess(d.data))
            dispatch(getTodo())
        }).catch((err)=>dispatch(addTodoFailur(err)))

    }

}
export const getTodo=()=>{
    return (dispatch)=>{
        dispatch(getTodoRequest())
        axios.get("http://localhost:3002/todos").then((d)=>dispatch(getTodoSucess(d.data))).catch((err)=>dispatch(getTodoFailur(err)))
    }
}
export const deleteTodo=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3002/todos/${id}`).then((d)=>{
            dispatch(delTodo(d.data))
            dispatch(getTodo())
        })
    }

}
