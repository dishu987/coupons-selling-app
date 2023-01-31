export function LogoutUser(dispatch) {
    dispatch({ type: 'GET_AUTH_ACTION', payload: {} });
    dispatch({ type: 'GET_PROFILE_ACTION', payload: {} });
    dispatch({ type: "VERIFY_AUTH_ACTION", payload: { isLoggedIn: false } })

    return;
}