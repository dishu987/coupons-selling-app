const initialState = {
    result: []
}

export default function getcouponsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_COUPONS_ACTION':
            if (action.payload == null) {
                return state
            }
            return {
                result: action.payload
            }
        default:
            return state
    }
}