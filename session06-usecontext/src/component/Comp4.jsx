import React, { useContext } from 'react'
import { UserContext } from '../App';
export default function Comp4({user}) {
    console.log(user);
    const info=useContext(UserContext);
    console.log("2222222",JSON.parse(info));
  return (
    <div>
        Comp4
        <p>xin chào {user}</p>
        <p> hello {info}</p>
    </div>
  )
}
