import React, { useReducer } from 'react'
console.log(React);
export default function UseReducer() {
    const reducer=(state,x)=>{
            // if(action.action=="ASC"){
            //     return state+1;
            // }else if(action.action=="DESC"){
            //     return state-1
            // }
            switch (x) {
                case "ASC":
                    return state+1
                case "DESC":
                    return state-1
                default:
                   return state;
            }
    }
    const [abc,ditPatch]= useReducer(reducer,5);
    const handleCount=()=>{
        ditPatch("ASC");
    }
  return (
        <>
            useReducer : Mục đích sinh ra để quản lý những cái state phức tạp 
            <p> count :{abc} </p>
            <button onClick={handleCount}> tăng count</button>
            <button onClick={()=>ditPatch("DESC")}> giảm count</button>

        </>
  )
}
