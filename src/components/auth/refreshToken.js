export async function RefreshTokenRequest(token, dispatch) {
  await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/token/refresh/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: token,
    }),
  })
    .then(response => response.json())
    .then(res => {
      const result = {
        token: {
          access: res.access,
          refresh: token,
        },
      };
      dispatch({ type: 'GET_AUTH_ACTION', payload: result });
    })
    .catch(err => {
      console.log(err);
    });
  return;
}
