import React, { useRef, useState } from 'react'

export default function UseRef() {
    const [number,setNumber] =useState(1);
    const obj={
        count:0,
    }
     const ref=useRef(0);
    const abc= useRef();
   const changeCount =()=>{
        obj.count=obj.count+1;
        setNumber(number+1);
        ref.current=ref.current+1;
   }
    console.log("111111",obj.count);
    console.log("222222",ref.current);
    const addTodo=()=>{
        abc.current.focus();
    }
    /* 

     */
  return (
        <>
                    <button onClick={changeCount}>use Ref</button> <br />
                    <input
                     type="text"
                     ref={abc}
                      />
    
                     <button onClick={addTodo}>add</button> <br />
        </>

  )
}
