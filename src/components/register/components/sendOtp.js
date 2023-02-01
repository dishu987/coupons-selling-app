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
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../breadcrubs';
import { SendOtpRequest } from './requests/sendotp';
const breadData = [
  {
    title: 'Home',
    link: '/',
    current: false,
    isDisabled: true,
  },
  {
    title: 'Send Otp',
    link: '',
    current: true,
    isDisabled: true,
  },
];
export default function SendOtpForm() {
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (mobile === '') {
      toast({
        title: 'Error',
        description: 'Invalid Mobile',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    console.log(mobile);
    const success = await SendOtpRequest(mobile, toast);
    if (success) {
      toast({
        title: 'Success',
        description: 'OTP Sent Successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate(`/verify-otp/${btoa(mobile)}`);
    } else {
      toast({
        title: 'Error',
        description: 'Invalid Mobile',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    setLoading(false);
    return;
  }
  return (
    <>
      <BreadCrumbs data={breadData} />
      <Flex
        minH={'82vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
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
              Create Account
            </Heading>
            <Text
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.800', 'gray.400')}
            >
              You&apos;ll get an sms with a verification otp
            </Text>
            <FormControl id="mobile" isInvalid={error}>
              <Input
                placeholder="Mobile Number"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                isDisabled={loading}
                onChange={e => setMobile(e.target.value)}
                value={mobile}
              />
              <FormErrorMessage>This is required field</FormErrorMessage>
            </FormControl>
            <Stack spacing={6}>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                isLoading={loading}
                loadingText="Sending..."
              >
                Send Otp
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
    </>
  );
}
