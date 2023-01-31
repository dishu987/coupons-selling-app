import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Heading,
  Box,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import ForgotPasswordForm from './card';

const ForgetPassword = () => {
  return (
    <>
      <Flex
        minH={'82vh'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ForgotPasswordForm />
      </Flex>
    </>
  );
};
export default ForgetPassword;
