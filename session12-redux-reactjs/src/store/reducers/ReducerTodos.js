const initialJobs=[
    {
        id:1,
        job:"học redux",
    },
    {
        id: 2,
        job: "phải học redux",
    },
    {
        id: 3,
        job: "tiếp tục học redux",
    },
]

 export const reducerJobs=(state=initialJobs,action)=>{
    switch (action.type) {
        case "ADD_JOB":
        //    state.push(action.payload);
            return [...state,action.payload]
        default:
            return state;
    }
}