const initialState = {
    result: {
        name: '',
        batch: '',
        degree: '',
        hostel: '',
        mobile: '',
        room: ''
    }
}
export default function getprofileReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PROFILE_ACTION':
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