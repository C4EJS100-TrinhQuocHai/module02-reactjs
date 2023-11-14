import React from 'react'
import "./Login.scss"
// import { AiFillApple } from "react-icons/ai";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Stack from 'react-bootstrap/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Login() {
  return (
   <>
        {/* Quy tắc BEM
            block element modifier
         */}
         <div  className="login">
           
            <div className="login__name">
                <input className='login--input' type="text" />
            </div>
            <div className="login__email">
                <input className='login--input' type="text" />
            </div>
            <div className="login__password">
                <input className='login--input' type="text" />
            </div>
            <div className="login__login">
                    <Button color='primary' variant='text'>Login</Button>
                    <Button variant='contained'>Login</Button>
                    <Button variant='outlined'>Login</Button>
                    <Button variant='outlined' startIcon={<DeleteIcon style={{color:"red"}}></DeleteIcon>} >Delelte</Button>

            </div>
    
         </div>
   </>
  )
}
