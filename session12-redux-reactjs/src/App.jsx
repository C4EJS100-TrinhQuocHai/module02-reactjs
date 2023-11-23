import React from 'react'
import Header from './components/header/Header'
import Jobs from './components/jobs/Jobs.jsx'

export default function App() {
  return (
    <>
     <h1>App</h1>
     <Header></Header>
     ***************************
     <Jobs></Jobs>
    </>
  )
}
/* 
Bài tập1: Hoàn thiện nốt chức năng delete và edit
sau đó chuyển hết dispatch sang dạng action
Bài tập2: thực hiện quản lý sinh viên bằng redux
 */