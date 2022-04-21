import {
    CHECK_COLLECTIBLES_SUCCESS,
    GET_COLLECTIBLES_SUCCESS,
    GET_COLLECTIBLES_FAILED
} from "../shared/ActionTypes.js";

const INIT_STATE = {
    collectiblesData: [],
    tokenInfo: [],
    gettingFailed: null,
};

const collectiblesReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_COLLECTIBLES_SUCCESS: {
            return {
                ...state,
                collectiblesData: action.payload.collectibles,
                gettingFailed: action.payload.collectibles,
            };
        }
        case CHECK_COLLECTIBLES_SUCCESS: {
            return {
                ...state,
                tokenInfo: action.payload.token,
            };
        }
        case GET_COLLECTIBLES_FAILED: {
            return {
                ...state,
                gettingFailed: action.payload.gettingFailed,
            }
        }
        default:
            return state;
    }
};
export default collectiblesReducer;