import React, { Component } from 'react'

export default class Student extends Component {
    

  handleEdit=(idUser)=>{
    this.props.edit(idUser)
  }
  render() {
      let data= this.props.student;
    return (
      <>
        <td>{this.props.index+1}</td>
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.id}</td>
        <td> <button onClick={()=>this.handleEdit(data.id)}>Sửa</button></td>
        <td> <button>Xoá</button></td>


      </>
    )
  }
}
