export async function ResendOtpRequest(mobile, toast) {
    let success = false;
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/resend_otp/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'mobile': mobile })
        })
        .then(response => response.json())
        .then(res => {
            if (res.status == 400) {
                toast({
                    title: 'Error',
                    description: res.message,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
                return;
            }
            success = true;
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        });
    return success;
}