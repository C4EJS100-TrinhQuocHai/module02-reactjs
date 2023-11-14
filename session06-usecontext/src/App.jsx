import React, { createContext, useContext, useState } from 'react'
import Comp1 from './component/Comp1'
import UseEffect from './component/UseEffect';
export const UserContext =createContext();
export default function App() {
  const [name,setName]=useState("HÀO");
  const [name1,setName1]=useState("HÀO Cu Đơ");
  const [nameInput,setNameInput]=useState("")
  const [a,setA]=useState({
    name:"hoa",
  });
  const handleChange=(e)=>{
    setName(e.target.value)
  }


  return (
    <div>
      <UserContext.Provider value={JSON.stringify({a:"hoa"})}>
         App
         <input
          type="text" 
          onChange={handleChange}
          />
         <p>{JSON.stringify(a)}</p>
          <Comp1 user={name}></Comp1>
      </UserContext.Provider>

      <hr />
      <UseEffect></UseEffect>
      {/* useEffect như componentDidMount */}
    </div>
  )
}
