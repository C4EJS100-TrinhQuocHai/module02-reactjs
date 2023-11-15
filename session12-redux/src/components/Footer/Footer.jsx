import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {action} from "../../action/action.js"
export default function Footer() {
    const data=useSelector(store=>store);
   const dispatch= useDispatch();
  return (
    <div>
        ***********************
        count :{data.xyz}
        <button onClick={()=>dispatch(action("ADD"))}>add</button>
    </div>
  )
}
