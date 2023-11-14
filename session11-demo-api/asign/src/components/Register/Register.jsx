import React, {  useState } from 'react'
import "./Register.scss"
import { useNavigate } from 'react-router-dom';
export default function Register() {
 const [nameInput,setNameInput]=useState({
    name:"",
    email:"",
    password:"",
 });
const navigate =useNavigate();
const handleChange=(e)=>{
    const {name,value} =e.target
     setNameInput({...nameInput,[name]:value});
}
const handleClick=(callback)=>{
    // để làm gì gọi api để 
    // trước khi cho lên phải kiểm tra xem email đã tồn tại hay chưa
    // phải gọi nó về kiểm tra
    fetch("http://localhost:4000/users")
     .then((res)=>{
        return res.json()
     })
     .then(data=>{
        let result= data.find((item)=>{
            return item.email==nameInput.email
        })
        if(result){
            console.log("tài khoản đã tồn tại!");
        }else{
           callback(nameInput);
          
           navigate("/login")
        }
     })
     .catch(err=>console.log("err",err))
}
    const saveUser= (user)=>{
        fetch("http://localhost:4000/users",{
            method:"POST",
             headers: {
                'Content-Type': 'application/json',
                 },
             body: JSON.stringify(user)
          }
        )
        .then()
        .catch(err=>console.log(err))}
  return (
        <>
            Register
            <div className="register">
                <label htmlFor="">name</label>
                <input 
                type="text"
                name="name"
                onChange={handleChange}
                 /> <br />
                <label htmlFor=""> email </label>
                <input
                 type="text"
                 name="email"
            
                onChange={handleChange}
                 /> <br />
                <label htmlFor=""> password </label>
                <input
                 type="text"
                 name="password"
                onChange={handleChange}
                  /> <br />
                <button onClick={()=>handleClick(saveUser)}>register</button>
            </div>
        </>
  )
}
