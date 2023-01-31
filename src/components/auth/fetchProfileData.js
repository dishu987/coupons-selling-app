import { RefreshTokenRequest } from './refreshToken';

export async function fetchProfileData(refresh_token, token, dispatch) {
  await RefreshTokenRequest(refresh_token, dispatch);
  await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/profile/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(res => {
      dispatch({ type: 'GET_PROFILE_ACTION', payload: res });
    })
    .catch(err => {
      console.log(err);
    });
  return;
}
