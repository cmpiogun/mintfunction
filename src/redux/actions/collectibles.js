import {
    GET_COLLECTIBLES_SUCCESS,
    CHECK_COLLECTIBLES_SUCCESS,
    GET_COLLECTIBLES_FAILED
} from "../shared/ActionTypes.js";
import authAxios from "../apis/axios";
import swal from 'sweetalert';

export const onGetCollectibles = ({
    // address
}) => {
    const address = "0x3f2D29e84BF509e508bD60470Ff61409516848eB";
    return async (dispatch) => {
        const body = {
            address
        };
        try {
            const res = await authAxios.post("/getCollectibles", body);
            if (res.data.success == false) {
                swal("Sorry!", res.data.message, "error");
            } else {
                if(res.data.collectibles[0].length != 0){
                    dispatch({
                        type: GET_COLLECTIBLES_SUCCESS,
                        payload: {
                            collectibles: res.data.collectibles,
                            gettingFailed: true
                        },
                    });
                } else {
                    dispatch({
                        type: GET_COLLECTIBLES_FAILED,
                        payload: {
                            gettingFailed: false,
                        },
                    });
                }
            }
        } catch (err) {
            swal("Sorry!", "Network Error", "error");
            console.log("error!!!!", err);
        }
    };
};


export const onCheckCollectibles = ({
    tokenId
}) => {
    return async (dispatch) => {
        const body = {
            tokenId
        };
        try {
            const res = await authAxios.post("/checkCollectible", body);
            console.log('response: ', res);
            if (res.data.success == false) {
                swal("Sorry!", res.data.message, "error");
            } else {
                dispatch({
                    type: CHECK_COLLECTIBLES_SUCCESS,
                    payload: {
                        token: res.data.tokenInfo,
                    },
                });
            }
        } catch (err) {
            swal("Sorry!", "Network Error", "error");
            console.log("error!!!!", err);
        }
    };
};

