import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Jobs() {
  const [job,setJob]=useState();
  const dataJobs= useSelector(state1=>{
    
    return state1.reducerJobs
  })
  const dispatchAdd=useDispatch();
  const handleAdd=()=>{
      // console.log("job",job);
      dispatchAdd({
        type:"ADD_JOB",
        payload:{
          job:job,
          id:Math.floor(Math.random()*99999999)
        }
      })
      setJob("")
  }
  const handleChange=(e)=>{
    setJob(e.target.value);
  }
  return (
        <>  
          Job <br />
          <input 
          type="text"
          onChange={handleChange}
          value={job}
           />
          <button onClick={handleAdd}>Add</button>
          {dataJobs.map((item)=>(
              <li key={item.id}> Name: {item.job} <button>Delete</button><button>Edit</button></li>
          ))}
        </>
  )
}
