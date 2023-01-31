export async function ForgetChangePasswordRequest(password, password1, uid, token) {
    let success = false;
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/reset-password/${uid}/${token}/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
                password2: password1
            })
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