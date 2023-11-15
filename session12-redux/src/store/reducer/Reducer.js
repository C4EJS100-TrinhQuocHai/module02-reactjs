const initialState =
{
    count: 0
}

export const reducer = (state = initialState, action) => {
    // console.log("111111",action)
    switch (action.type) {
        case "INCREASE":
            let newState = { ...state }
            newState.count = newState.count + 1
            return newState;
        case "DECREASE":
            state = state - 1;
            return state;
        default:
            return state;
    }
}
