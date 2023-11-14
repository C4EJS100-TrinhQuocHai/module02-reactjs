import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ProductDetail() {
    const [productDetail,setProductDetail]=useState([]);
    const {productId}=useParams();
  useEffect(()=>{
        fetch("http://localhost:4000/products")
        .then(res=>res.json())
        .then(data=>{
           
            let result= data.find((item)=>{
                return item.id==productId
            })
            setProductDetail(result.product)
        })
    },[productId])
  return (
    <>
        {productDetail.map((item)=>{
            return <li key={item.id}> name: {item.name} price: {item.price}</li>
        }
        )}
    </>
  )
}
