const getprofile = (coupons) => dispatch => {
    dispatch({
        type: 'GET_COUPONS_ACTION',
        payload: coupons
    })
}

export default getprofile;