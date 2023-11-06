import React from 'react'
import Comp3 from './Comp3'

export default function Comp2({user}) {
  return (
    <div>
        Comp2
        <Comp3 user={user}></Comp3>

    </div>
  )
}
