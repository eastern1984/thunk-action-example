export const EXAMPLE_ACTION_1 = "EXAMPLE_ACTION1";

export const asyncEndedSuccess = () => {
    return {
        type: EXAMPLE_ACTION_1,
        msg: 'Success',
    };
}

export const asyncEndedError = () => {
    return {
        type: EXAMPLE_ACTION_1,
        msg: 'Error',
    };
}

export const asyncLoading = () => {
    return {
        type: EXAMPLE_ACTION_1,
        msg: 'Loading...',
    };
}

export const exampleActionAsyns = (value) => {   // action creator
    return (dispatch) => {
        setTimeout(() => {
            dispatch(asyncEndedSuccess());
        }, 1000);
        dispatch(asyncLoading());
    }
}

export const exampleActionAsynsErr = (value) => {   // action creator
    return (dispatch) => {
        setTimeout(() => {
            dispatch(asyncEndedError());
        }, 2500);
        dispatch(asyncLoading());
    }
}

