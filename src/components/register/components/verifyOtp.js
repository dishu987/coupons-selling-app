import { Center, FormErrorMessage, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  useToast,
  Link,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../breadcrubs';
import { ResendOtpRequest } from './requests/resendOtp';
import { VerifyOtpRequest } from './requests/verifyOtp';
const breadData = [
  {
    title: 'Home',
    link: '',
    current: false,
    isDisabled: true,
  },
  {
    title: 'Send Otp',
    link: '',
    current: false,
    isDisabled: true,
  },
  {
    title: 'Verify Otp',
    link: '',
    current: true,
    isDisabled: true,
  },
];
export default function VerifyMobileForm() {
  const { mobile } = useParams();
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  async function handleResend() {
    setResending(true);
    const success = await ResendOtpRequest(atob(mobile), toast);
    if (success) {
      toast({
        title: 'Success',
        description: 'Otp has been resended to yours mobile number',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    setResending(false);
    return;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (mobile === '') {
      toast({
        title: 'Error',
        description: 'First send otp to mobile number',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    const success = await VerifyOtpRequest(
      atob(mobile),
      otp1 + otp2 + otp3 + otp4,
      toast
    );
    if (success) {
      toast({
        title: 'Success',
        description: 'Mobile Verified',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate(`/register/${mobile}`);
    } else {
      toast({
        title: 'Error',
        description: 'Invalid OTP',
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
            maxW={'sm'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={10}
          >
            <Center>
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                Verify your Mobile Number
              </Heading>
            </Center>
            <Center
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.800', 'gray.400')}
            >
              We have sent code to your mobile number
            </Center>
            <Center
              fontSize={{ base: 'sm', sm: 'md' }}
              fontWeight="bold"
              color={useColorModeValue('gray.800', 'gray.400')}
            >
              {atob(mobile)}
            </Center>
            <FormControl>
              <Center>
                <HStack>
                  <PinInput otp mask>
                    <PinInputField onChange={e => setOtp1(e.target.value)} />
                    <PinInputField onChange={e => setOtp2(e.target.value)} />
                    <PinInputField onChange={e => setOtp3(e.target.value)} />
                    <PinInputField onChange={e => setOtp4(e.target.value)} />
                  </PinInput>
                </HStack>
              </Center>
            </FormControl>
            <Stack spacing={3}>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                isLoading={loading}
                loadingText={'Verifying..'}
              >
                Verify
              </Button>
              <Button
                variant={'link'}
                color={'blue.400'}
                textAlign={'center'}
                isLoading={resending}
                loadingText="Resending Otp..."
                onClick={handleResend}
                isDisabled={resending}
              >
                Resend Otp?
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
    </>
  );
}
