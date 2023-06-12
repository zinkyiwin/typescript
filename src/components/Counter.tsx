import { useReducer } from "react";

type CounterState = {
    count:number
}

type CounterAction = {
    type :'increment' | 'decrement' |'reset'
    payLoad : number
}
const initialState ={count :0};

function reducer(state:CounterState ,action :CounterAction) {
    switch(action.type) {
        case 'increment' :return {count : state.count + action.payLoad}
        case 'decrement' :return {count : state.count - action.payLoad}
        case 'reset' : return initialState
             default :return state
    }
}

export  const Counter =() => {
    const [state,dispatch] =useReducer(reducer,initialState)

    return(
        <div>
            Count :{state.count}
            <button onClick={() => dispatch({type :'increment',payLoad:10})}>Increment 10</button>
            <button onClick={() => dispatch({type :'decrement',payLoad:10})}>Decrement 10</button>
            <button onClick={() => dispatch({type :'reset',payLoad:0})}>Reset 0</button>
        </div>
    )
}