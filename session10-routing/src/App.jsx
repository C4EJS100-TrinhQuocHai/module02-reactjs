import React,{lazy,Suspense} from 'react'
import { Routes,Route,Link,NavLink, useNavigate,Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
// import About from './components/About'
import Contact from './components/Contact/Contact'
import News from './components/News/News'
import "./App.css"
import Product from './components/Product/Product'
import NotFound from './components/NotFound/NotFound'
import Category from './components/category/Category'
import CategoryDetail from './components/CategoryDetail/CategoryDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
export default function App() {
  // console.log("1111111",React.lazy());
  const abc= useNavigate();
  const handleClick=()=>{
    // trong dấu ngoặc truyền path vào.
        abc("")
  }
  // callback 
  // promise ES6 promise all 
  // asyn await ES7
 const Lazy = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/About")), 3000);
  });
  
});
  return (
    <>
      <ScrollToTop>
      </ScrollToTop>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/about">About</NavLink>
          </li>
          <li>
              <NavLink to="/news">News</NavLink>
          </li>
          <li>
              <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='/about' element={
            <Suspense fallback={<div className="section-center">
         <div className="section-path">
          <div className="globe">
            <div className="wrapper">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
             </div>
            </div>
          </div>
        </div>
}>
          <Lazy></Lazy>
            </Suspense>
          }></Route>
          <Route path='/news' element={<News></News>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/product/:idProduct' element={<Product></Product>}></Route>
          <Route path='/category' element={<Category></Category>}>
            <Route path=':categoryId' element={<CategoryDetail></CategoryDetail>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
         <button onClick={()=>window.scrollTo(100, 0)}> về đầu trang11</button>
        <button  onClick={handleClick}> quay về trang chủ </button>



    </>
  )
}
