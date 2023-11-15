import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {action} from "../../action/action.js"
export default function Header() {
    const data=useSelector(store=>store);
    console.log("data",data);
    const dispat=useDispatch();
    const handleClick=()=>{
        dispat(action("INCREASE",5));
    }
  return (
    <div>
        count:{ data.abc.count}
        <button onClick={handleClick}>click</button>
    </div>
  )
}
