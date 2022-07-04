import { combineReducers, createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./loginReducer";
import { todoReducer } from "./todo/todoReduer";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const custoMiddlware=(store)=>(next)=>(action)=>{
    return typeof action=="function"?action(store.dispatch):next(action)
}
const rootReducer=combineReducers({
    login:loginReducer,
    todo:todoReducer
})

export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))