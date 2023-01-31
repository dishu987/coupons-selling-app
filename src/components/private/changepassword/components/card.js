import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePasswordRequest } from '../changePass';

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.getuser).result;
  async function handleSubmit(e) {
    e.preventDefault();
    if ((password !== password2) | (password === '') | (password2 === '')) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    const success = await ChangePasswordRequest(
      {
        password: password,
        password2: password2,
      },
      auth.token.refresh,
      auth.token.access,
      dispatch
    );
    if (success) {
      toast({
        title: 'Success',
        description: 'Password Changes Successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: 'Invalid Crediantials',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    setLoading(false);
    return;
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Change Password
        </Heading>
        <FormControl id="password" isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </FormControl>
        <FormControl isInvalid={error} id="password2" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            onChange={e => setPassword2(e.target.value)}
            value={password2}
          />
          <FormErrorMessage>Password doesn't match.</FormErrorMessage>
        </FormControl>
        <Stack spacing={6}>
          <Button
            type="submit"
            loadingText="Please Wait..."
            isLoading={loading}
            isDisabled={loading}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
