//  khởi tạo trạng thái ban đầu
// const initialState=[
//     {
//         id:1,
//         job:"học redux"
//     },
//     {
//         id: 2,
//         job: "tiếp tục học redux"
//     },

// ];
const initialState=0;

// khởi tạo reducer ( là hàm dựa vào action tính toán trả lại state  mới);

const reducerCount =(state=initialState,action)=>{
  
        switch (action.type) {
            case "INCREASE" :
                state=state+1
                return state
            case "DECREASE":
                state = state - 1
                return state
            default:
                return state
        }
}
export default reducerCount;


