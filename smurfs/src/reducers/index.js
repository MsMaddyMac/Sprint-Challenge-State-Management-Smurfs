import { GET_SMURFS_LOADING, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SMURFS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_SMURFS_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload,
                    isFetching: true,
                    error: null
            };  
        case GET_SMURFS_FAILURE:
                return {
                    ...state,
                    smurfs: [],
                    isFetching: false,
                    error: action.payload
                };  
        default:
            return state;
    }
}

export default reducer;