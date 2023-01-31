export default function addcouponReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_COUPON_ACTION':
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