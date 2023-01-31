import { RefreshTokenRequest } from "../../auth/refreshToken";
import { fetchCouponsData } from "../../coupons/fetchCoupons";
export async function AddCouponRequest(coupon, token, dispatch, refresh_token, toast) {
    await RefreshTokenRequest(refresh_token, dispatch);
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/coupons/create/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(coupon)
        })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            toast({
                title: 'Success',
                description: 'Created',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
            fetchCouponsData(dispatch);
        })
        .catch(err => {
            if (err.errors) {

            }
            toast({
                title: 'Error',
                description: 'Fill Required Fields First',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        });
}