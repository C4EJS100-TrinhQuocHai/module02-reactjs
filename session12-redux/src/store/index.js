import {reducer} from "./reducer/Reducer.js";
import { reducer1 } from "./reducer/Reducer1.js";

import {createStore,combineReducers} from "redux"

 const rootReducer =combineReducers({
    abc:reducer,
    xyz:reducer1,
    //enhanded
 })
 export const store = createStore(rootReducer);
