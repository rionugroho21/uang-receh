import {combineReducers} from 'redux';

import _datas from '../data/datas';

const datas = (state = _datas, action) => {
    switch (action.type){
        case "LOAD_DATAS": return action.datas;
        default: return state;
    }
}

const _comment = [];

const comment = (state = _comment, action) => {
    switch (action.type){
        case "LOAD_COMMENT": return action.comment;
        default: return state;
    }
}

const rootReducer = combineReducers({datas, comment});

export default rootReducer;