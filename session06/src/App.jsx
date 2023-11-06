import React, { useMemo, useState } from 'react'
import Header from './component/Header'
import UseID from './component/UseID';
import UseCallback from './component/UseCallback';
  const cart =[
    {
      name:"mì tôm",
      quantity:5,
      price:5000,
    },
     {
      name:"bánh orio  ",
      quantity:4,
      price:6000,
    }
  ]
export default function App() {
  const [count,setCount] =useState(0);
  const [a,setA] =useState(5);
  const [s,setS] =useState("");
  const [products,setProducts]=useState(cart);
  const [product,setProduct]=useState("");
  const [name,setName] =useState("");
  const [total,setTotal] =useState(0);
  const handleIncrease=()=>{
    setCount(count+1)
  }
  /* 
    code tính toán  diện tích hình vuông
   */
  const dienTich=useMemo(
        ()=>{
          // console.log("111");
            setS(a*a)
        },
        [count]
  )
    //  const tinhToanCart =useMemo(
    //       ()=>{
    //         console.log("!1111");
    //             let total= products.reduce((acu,value)=>{
    //               return acu+value.quantity * value.price
    //             },0)
    //            return total
    //       },[product]
    // )
    useMemo(()=>{
        //tính toán
        console.log("usememo");
         let sum= products.reduce((acu,value)=>{
                  return acu+value.quantity * value.price;
                },0)
         setTotal(sum);
    },[products])
    const buyCart = ()=>{
          let obj={
            name:name,
            price:5000,
            quantity:product,
          }
          setProducts([...products,obj]);
          setName("");
          setProduct("");
    }
    const handleCallback=()=>{
      console.log("callback");
    }
  return (
    <div>
      <Header count1={count}></Header>
      <input
        value={name}
        type="text"
        placeholder='nhập sản phẩm muốn mua'
        onChange={(e)=>setName(e.target.value)} />
        <input
        value={product}
        type="text"
        placeholder='nhập số lượng'
        onChange={(e)=>setProduct(e.target.value)} />
      <button onClick={buyCart}> click mua  </button>
      <p> giá sản phẩm :{total}</p>
      <p> Diện tích hình vuông là :{s}</p>
      <button onClick={handleIncrease}>click tăng count</button>
      <button onClick={dienTich}> click tính S </button>
      <UseID></UseID>
      <UseCallback callback={handleCallback} ></UseCallback>
      {/* <button onClick={handleCallback}>click </button> */}
    </div>
  )
}
