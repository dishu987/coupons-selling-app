import { RefreshTokenRequest } from "../../auth/refreshToken";


export async function ChangePasswordRequest(data, refresh_token, token, dispatch) {
    let success = false;
    await RefreshTokenRequest(refresh_token, dispatch);
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/changepassword/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
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