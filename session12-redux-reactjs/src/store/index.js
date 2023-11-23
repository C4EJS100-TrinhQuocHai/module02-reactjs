import {createStore,combineReducers} from "redux";
import reducerCount from "./reducers/Reducer1";
import { reducerJobs } from "./reducers/ReducerTodos";
 const rootReducer = combineReducers({
      reducerCount,
      reducerJobs,
 }) 

 //enhance
export const store = createStore(rootReducer);
