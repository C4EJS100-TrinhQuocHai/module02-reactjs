import React from 'react'
import { useParams } from 'react-router-dom'
export default function Product() {
    // const {idProduct} =useParams();
    // console.log("11111111",useParams());
    // let idProduct= useParams().idProduct;
    const {idProduct}=useParams();
    console.log(idProduct);
  return (
    <div>Product</div>
  )
}
