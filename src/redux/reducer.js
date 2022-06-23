import {
    GET_DETAIL_PAGE
} from "./action";

const initialState = {
    detail: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DETAIL_PAGE:
            return { ...state, detail: action.payload };

        default:
            return state;
    }
}

export default userReducer;