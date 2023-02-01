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
import BreadCrumbs from '../breadcrubs';
const breadData = [
  {
    title: 'Home',
    link: '/',
    current: false,
  },
  {
    title: 'Login',
    link: '/login',
    current: false,
  },
  {
    title: 'Forget Password',
    link: '/forget-password',
    current: true,
  },
];
const ForgetPassword = () => {
  return (
    <>
      <BreadCrumbs data={breadData} />
      <Flex
        minH={'82vh'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ForgotPasswordForm />
      </Flex>{' '}
    </>
  );
};
export default ForgetPassword;
