import { RefreshTokenRequest } from '../auth/refreshToken';

export async function DeleteCoupon(couponid, refresh_token, token, dispatch, toast) {
    let success = false;
    await RefreshTokenRequest(refresh_token, dispatch);
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/coupons/delete/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: couponid })
        })
        .then(response => response.json())
        .then(res => {
            success = true;
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        });
    return success;
}