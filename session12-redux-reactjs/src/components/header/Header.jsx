import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { action } from '../../store/action/action';
export default function Header() {
    const dataCount =useSelector(state=>{
         console.log("state",state);
        return state.reducerCount
    })
    const dispatchIncrease=useDispatch();
    const handleIncrease=()=>{
        console.log("click thành công!");
        dispatchIncrease(action("INCREASE"));
    }
    const handleDecrease=()=>{
        dispatchIncrease({
            type:"DECREASE"
        })
    }
  return (
    <div>
        Header
        <p> Count: {dataCount}</p>
        <button onClick={handleIncrease}> increase</button>
        <button onClick={handleDecrease}> decrease</button>
        

    </div>
  )
}
