import darkReducer from "./darkLight";
import {combineReducers} from 'redux';
import featureReducer from "./featureData";

const rootReducer = combineReducers({
    dark : darkReducer,
    features : featureReducer,
})

export default rootReducer;
