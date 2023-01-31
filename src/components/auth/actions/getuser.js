const getuser = (user) => dispatch => {
    dispatch({
        type: 'GET_AUTH_ACTION',
        payload: user
    })
}

export default getuser;