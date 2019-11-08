import axios from 'axios';

export const GET_SMURFS_LOADING = 'GET_SMURFS_LOADING';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const smurfsLoading = () => ({ type: GET_SMURFS_LOADING });
export const smurfsLoadingSuccess = () => ({ type: GET_SMURFS_SUCCESS });
export const smurfsLoadingFailure = () => ({ type: GET_SMURFS_FAILURE });

export function getSmurfs() {
    return function(dispatch) {
        dispatch(smurfsLoading());
        return axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {console.log('Smurfs', res.data)
            dispatch(smurfsLoadingSuccess(res.data))})
        .catch(err => dispatch(smurfsLoadingFailure(), err)
        );
    };
}