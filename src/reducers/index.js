import { combineReducers } from 'redux';
import { findAllUnit, findUnitById, removeUnitById, saveUnit } from "./unit";

const rootReducer = combineReducers({
    findAllUnit, findUnitById, removeUnitById, saveUnit
});

export default rootReducer;