import { ADD_TODO_FAILUR, ADD_TODO_REQUES, ADD_TODO_SUCESS, GET_TODO_FAILUR, GET_TODO_REQUES, GET_TODO_SUCESS, HIGH_TODO, LOW_TODO } from "./actionType"

const init={
    loading:false,
    error:false,
    todo:[]
}
export const todoReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_TODO_REQUES:
            return {...store,loading:true}
        case ADD_TODO_SUCESS:
            return {...store,loading:false}
        case ADD_TODO_FAILUR:
            return {...store,error:true}
        case GET_TODO_REQUES:
            return {...store,loading:true}
        case GET_TODO_SUCESS:
            return {...store,loading:false,todo:payload}
        case GET_TODO_FAILUR:
            return {...store,error:true}
        case LOW_TODO:
            return {...store,todo:store.todo.sort((a,b)=>{
                if(a.item>b.item){
                    return -1
                }
                if(a.item<b.item){
                    return 1
                }
            })}
        case HIGH_TODO:
            return {...store,todo:store.todo.sort((a,b)=>{
                if(a.item<b.item){
                    return -1
                }
                if(a.item>b.item){
                    return 1
                }
            })}
        default:
            return {...store}
    }

}