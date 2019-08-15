




import {FETCH_MOVIES_DATA_START, FETCH_MOVIES_DATA_SUCCESS, FETCH_MOVIES_DATA_FAILURE} from '../actions'


const initialState = {
    movies: [],
    isLoading: false,
    error: ''
}


export const MoviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES_DATA_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_MOVIES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload,
                error: ''
            }
        default:
            return state
    }
}