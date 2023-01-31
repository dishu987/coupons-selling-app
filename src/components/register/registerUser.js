import { fetchProfileData } from '../auth/fetchProfileData';

export async function registerUser(data, toast, dispatch, navigate) {
  await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/register/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(res => {
      console.log(res);
      if (res.errors) {
        toast({
          title: 'Error',
          description: res.errors.email[0],
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      toast({
        title: 'Success',
        description: 'Account Created',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: 'GET_AUTH_ACTION', payload: res });
      dispatch({
        type: 'VERIFY_AUTH_ACTION',
        payload: { isLoggedIn: true },
      });
      fetchProfileData(res.token.refresh, res.token.access, dispatch);
      navigate('/');
    })
    .catch(err => {
      console.log(err);
      toast({
        title: 'Error',
        description: err.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    });
  return;
}
