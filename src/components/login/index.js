import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Profiler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProfileData } from '../auth/fetchProfileData';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../breadcrubs';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const breadData = [
  {
    title: 'Home',
    link: '/',
    current: false,
  },
  {
    title: 'Login',
    link: '/login',
    current: true,
  },
];
export default function Login() {
  const toast = useToast();
  let query = useQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.getuser);
  const profile = useSelector(state => state.getprofile);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleAuth(e) {
    e.preventDefault();
    if ((password === '') | (email === '')) {
      toast({
        title: 'Error',
        description: 'Fill Required fields first',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/login/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.errors) {
          user.errors.non_field_errors?.map(err => {
            toast({
              title: 'Email',
              description: err,
              status: 'error',
              duration: 2000,
              isClosable: true,
            });
          });
        } else {
          console.log(user);
          dispatch({ type: 'GET_AUTH_ACTION', payload: user });
          dispatch({
            type: 'VERIFY_AUTH_ACTION',
            payload: { isLoggedIn: true },
          });
          toast({
            title: 'Success!',
            description: 'Logged In',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
          if (query.get('redirect_to') !== '') {
            navigate(query.get('redirect_to'));
          } else {
            navigate('/');
          }
        }
      })
      .catch(err => {
        console.log(err);
        toast({
          title: 'Error!',
          description: 'Something went wrong.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
    console.log(auth);
    return;
  }
  useEffect(() => {
    console.log(query.get('redirect_to'));
  }, []);
  return (
    <>
      <BreadCrumbs data={breadData} />
      <Stack minH={'91vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}> Sign in to your account</Heading>{' '}
            <form onSubmit={handleAuth} noValidate>
              <FormControl id="email">
                <FormLabel> Email address </FormLabel>{' '}
                <Input
                  type="email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>{' '}
              <FormControl id="password">
                <FormLabel> Password </FormLabel>{' '}
                <Input
                  type="password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>{' '}
              <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox> Remember me </Checkbox>{' '}
                  <Link color={'blue.500'} to="/forget-password">
                    {' '}
                    Forgot password ?{' '}
                  </Link>{' '}
                </Stack>{' '}
                <Button colorScheme={'blue'} variant={'solid'} type={'submit'}>
                  Sign in
                </Button>{' '}
              </Stack>{' '}
            </form>
          </Stack>{' '}
        </Flex>{' '}
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'https://pbs.twimg.com/media/EUM584uUUAAOq2_.jpg'}
          />{' '}
        </Flex>{' '}
      </Stack>
    </>
  );
}
