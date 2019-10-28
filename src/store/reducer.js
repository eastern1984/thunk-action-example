import * as actionTypes from './actions';

const initialState = {
    someVar1: { 
        field1: 1, 
        field2: '123',
    },
    someVar2: 12
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EXAMPLE_ACTION_1:
            return {
                ...state,
                someVar1: {
                    ...state.someVar1,
                    field1: action.someNewValue,
                }    
            };
        case actionTypes.EXAMPLE_ACTION_2:
            return {
                ...state,
                field2: action.someNewValueForField2,
            };
        default:
                return state;
    }
};

export default reducer;
