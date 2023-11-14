import React,{lazy,Suspense} from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
// import ProductDetail from './components/ProductDetail/ProductDetail'
import "./App.css"
export default function App() {
  const Lazy = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/ProductDetail/ProductDetail')), 3000);
  });
});
  return (
      <>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/products' element={<Products></Products>}>
            <Route path=':productId' element={
              <Suspense
               fallback={<div className="section-center">
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
                  </div>}>
                <Lazy></Lazy>
              </Suspense>
            }></Route>
          </Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Routes>
      </>
  )
}
