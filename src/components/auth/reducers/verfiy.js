const initialState = {
    result: {
        isLoggedIn: false
    }
}

export default function VERIFY_AUTH_Reducer(state = initialState, action) {
    switch (action.type) {
        case 'VERIFY_AUTH_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}