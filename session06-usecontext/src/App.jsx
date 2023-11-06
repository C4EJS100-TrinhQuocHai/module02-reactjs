import React, { createContext, useContext, useState } from 'react'
import Comp1 from './component/Comp1'
export const UserContext =createContext();
export default function App() {
  const [name,setName]=useState("HÀO");
  const [name1,setName1]=useState("HÀO Cu Đơ");
  const [a,setA]=useState({
    name:"hoa",
  });

  return (
    <div>
      <UserContext.Provider value={JSON.stringify({a:"hoa"})}>
         App
         <p>{JSON.stringify(a)}</p>
          <Comp1 user={name}></Comp1>
      </UserContext.Provider>
    </div>
  )
}
