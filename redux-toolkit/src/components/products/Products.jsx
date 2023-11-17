import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addProduct,deleteProduct,editProduct } from '../../store';
export default function Products() {
    const [product,setProduct]=useState();
   const [editProduct1,setEditProduct]=useState()
    const dispatch= useDispatch();
    const [check,setCheck]=useState(true);
    const data= useSelector(state=>{
       return state.productReducer.products;
    })
    const handleClick=()=>{
        if(check){
             dispatch(addProduct({
            name:product,
            id:Math.floor(Math.random()*999999999)
        }))
        setProduct("");
        }else{
           console.log("11111",editProduct1);
            dispatch(editProduct({...editProduct1,name:product}));
            setProduct("");
            setCheck(true)
        }
       
    }
    const handleDelete=(id)=>{
            // console.log("1111",id);
            let confirmDelete= confirm("bạn có muốn xoá hay không");
            if(confirmDelete){
                dispatch(deleteProduct(id));
            }
    }
     const handleEdit=(product)=>{
            // console.log("1111",id);
            setProduct(product.name);
            setCheck(false)
            setEditProduct(product);
    }
  return (
    <>
        {data.map((item)=>(
            <li key={item.id}> Name :{item.name} 
                <button onClick={()=>handleDelete(item.id)}>delete</button>
                <button onClick={()=>handleEdit(item)}>Edit</button>
             </li>
        ))}
        <input
        onChange={(e)=>setProduct(e.target.value)}
        value={product}
         type="text"
          />
        <button onClick={handleClick}>addProduct</button>
    </>
  )
}
