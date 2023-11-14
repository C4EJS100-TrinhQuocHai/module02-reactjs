import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
export default function ScrollToTop() {
    const {pathname} =useLocation();
    console.log("111111",pathname);
    useEffect(()=>{
     
    },[pathname])

  return (
    <>

    </>
  )
}
