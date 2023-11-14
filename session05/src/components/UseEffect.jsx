import React, { useEffect, useState } from 'react'

 function UseEffect() {
    const [count,setCount] =useState(0);
    const [title,setTitle] =useState("posts");

    // useEffect(()=>{
    //     console.log("thực hiện việc call API Lấy dữ liệu");
    //     // nơi để call API lấy dữ liệu 
    // },[])
     useEffect(()=>{
        // console.log("thực hiện việc call API Lấy dữ liệu");
        // nơi để call API lấy dữ liệu 
        fetch(`https://jsonplaceholder.typicode.com/${title}`)
        .then(data=>data.json())
        .then(res=>{
            console.log("33333",res);
        })
        .catch(err=>console.log(err));

    },[title])
   
  return (
        <>
            <p> count :{count}</p>
            <button onClick={()=>setCount(count+1)}>click </button>
            <button onClick={()=>setTitle("users")}> click title </button> <br />
        </>
  )
}
export default UseEffect;
