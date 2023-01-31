import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ForgetPasswordRequest } from './sendRequest';
import { FormErrorIcon } from '@chakra-ui/react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();
  async function handleSubmit(e) {
    e.preventDefault();
    if (email === '') {
      setError(true);
      toast({
        title: 'Error',
        description: 'Email is required field',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setError(false);
    setLoading(true);
    const success = await ForgetPasswordRequest(email);
    if (success) {
      toast({
        title: 'Success',
        description: 'Email Sent Successfully! Check Spam Mails',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: 'Try Again',
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
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
        >
          You&apos;ll get an email with a reset link
        </Text>

        <FormControl id="email" isInvalid={error}>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <FormErrorMessage>
            {' '}
            <FormErrorIcon />
            This is Required field
          </FormErrorMessage>
        </FormControl>
        <Stack spacing={6}>
          <Button
            type={'submit'}
            isLoading={loading}
            loadingText="Verifying..."
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
