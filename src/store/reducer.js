import * as actionTypes from './actions/actions';

const initialState = {
    someVar2: 12,
    msg: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EXAMPLE_ACTION_1:
            return {
                    ...state,
                    msg: action.msg,
                };    
        default:
                return state;
    }
};

export default reducer;
