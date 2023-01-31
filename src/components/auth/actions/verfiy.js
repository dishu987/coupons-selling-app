const VERIFY_AUTH = (isLoggedIn) => dispatch => {
    dispatch({
        type: 'VERIFY_AUTH_ACTION',
        payload: isLoggedIn
    })
}

export default VERIFY_AUTH;