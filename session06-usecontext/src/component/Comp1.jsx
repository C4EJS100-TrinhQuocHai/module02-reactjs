import React from 'react'
import Comp2 from './Comp2'

export default function Comp1({user}) {
  return (
    <div>
        Comp1
        <Comp2 user={user}></Comp2>
    </div>
  )
}
