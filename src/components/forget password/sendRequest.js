export async function ForgetPasswordRequest(email) {
    let success = false;
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/send-reset-password-email/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
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