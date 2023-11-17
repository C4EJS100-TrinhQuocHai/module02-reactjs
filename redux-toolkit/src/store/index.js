/* 
    Cấu hình store
    1. tạo state cho ứng dụng
    -redux-toolkit cung cấp cho createSile
    2. tạo reducer
    3. tạo store
    - configureStore
    4. xuất store cho ứng dụng dùng
 */
import {createSlice,configureStore} from "@reduxjs/toolkit";

const productSlice =createSlice({
    name:"redux-toolkit", // bắt buộc 
    initialState: { // bắt buộc initialState
        products:[
            {
                id:1,
                name:"iphone12"
            },
            {
                id: 2,
                name: "iphone14"
            },
            {
                id:3,
                name: "iphone15"
            }
        ]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.unshift(action.payload)
        },
        deleteProduct: (state,action)=>{
           
            state.products = state.products.filter((item)=>{
                return item.id != action.payload
            })
        },
        editProduct: (state, action)=>{
           let index= state.products.findIndex((item)=>{
                return item.id==action.payload.id
           })
           state.products[index]=action.payload;
        }
    }
})
 //1.1: đi xuất ra action
export const { addProduct,deleteProduct,editProduct } = productSlice.actions  //actions mặc định
// bước 2: tạo reducer
const productReducer = productSlice.reducer;// reducer bắt buộc

// bước 3: tạo store 
const store = configureStore({ //configureStore bắt buộc
    reducer:{
        // productReducer: productReducer
        productReducer,
    }
})
export default store;