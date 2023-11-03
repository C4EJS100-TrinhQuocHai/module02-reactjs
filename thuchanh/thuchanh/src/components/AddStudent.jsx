import React, { Component } from 'react'
export default class AddStudent extends Component {
    constructor(){
        super()
        this.state={
            name:"",  
            age:"",
        }
    }
    /*  this.props.add là function add */
    saveInfo=(e)=>{
      // ngăn chặn việc submit lên form
         e.preventDefault();
         // đưa các fill về b.addStudent
         this.props.add(this.state);
         this.setState({
          name:"",
          age:"",
          check:false,
         })
    }
        changeValue=(e)=>{ 
        let aaaa= e.target.name;
        let value= e.target.value;
        if(value==""){
          value=" ";
        }
        this.setState({
            [aaaa]:value, 
            check:true,
        })
        
    }
  render() {
    // có những cái biến để hứng kết quả khi nhấn edit
         
    return (
      <>
        <form action="">
            <label htmlFor="">Họ và Tên </label>
            <input
             placeholder='mời nhập tên'
             onChange={this.changeValue}
             name='name'
             value={this.state.va}
             /> <br />
            <label htmlFor=""> Tuổi </label>
            <input
             placeholder='nhập tuổi'
             onChange={this.changeValue}
             name='age'
             value={age}
             ></input> <br />
            <button onClick={this.saveInfo}>Lưu</button>
        </form>
      </>
    )
  }
}
