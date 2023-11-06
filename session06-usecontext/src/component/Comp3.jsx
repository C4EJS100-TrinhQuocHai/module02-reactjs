import React from 'react'
import Comp4 from './Comp4'
export default function Comp3({user}) {
  return (
    <div>
        Comp3
        <Comp4 user={user}></Comp4>
    </div>
  )
}
