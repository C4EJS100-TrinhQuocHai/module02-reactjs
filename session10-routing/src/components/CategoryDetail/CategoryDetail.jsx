import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
export default function CategoryDetail() {
    const [category,setCategory]=useState([
        {
            id:111,
            category:"iphone",
            product:[
                {
                    id:Math.floor(Math.random()*947962656),
                    name:"iphone1",
                    price:5000,
                },
                 {
                    id:Math.floor(Math.random()*947962656),
                    name:"iphone2",
                    price:6000,
                }
            ]
        },
        {
            id:222,
            category:"cakes",
            product:[
                {
                    id:Math.floor(Math.random()*947962656),
                    name:"cake1",
                    price:51000,
                },
                 {
                    id:Math.floor(Math.random()*947962656),
                    name:"cake2",
                    price:61000,
                }
            ]
        },
        {
            id:333,
            category:"alcohol",
            product:[
                {
                    id:Math.floor(Math.random()*947962656),
                    name:"táo mèo",
                    price:41000,
                },
                 {
                    id:Math.floor(Math.random()*947962656),
                    name:"3 sờ kích",
                    price:81000,
                }
            ]
        }
    ])
    const [products,setProducts]=useState([])
    const {categoryId}= useParams();
     useEffect(()=>{
            let resultProduct= category.find((item)=>{
                return item.id==categoryId
            })
            setProducts(resultProduct.product);
     },[categoryId])
        // console.log("1111111",categoryId);
  return (
    <div>
        CategoryDetail
        {products.map((item)=>(
           <li key={item.id}>
             name: {item.name}
             price: {item.price}
           </li>
        ))}
    </div>
  )
}
