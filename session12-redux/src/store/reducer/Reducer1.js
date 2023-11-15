const initialState =1


export const reducer1 = (state = initialState, action) => {
    // console.log("111111",action)
    switch (action.type) {
        case "ADD":
            state=state+1
          return state
        default:
            return state;
    }
}
