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
import ResetPasswordForm from './components/card';
import BreadCrumbs from '../../breadcrubs';
const breadData = [
  {
    title: 'Home',
    link: '/',
    current: false,
    isDisabled: true,
  },
  {
    title: 'Profile',
    link: '',
    current: false,
    isDisabled: false,
  },
  {
    title: 'Change Password',
    link: '/change-password',
    current: true,
    isDisabled: false,
  },
];
const ChangePassword = () => {
  return (
    <>
      <BreadCrumbs data={breadData} />
      <Flex
        minH={'82vh'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ResetPasswordForm />
      </Flex>
    </>
  );
};
export default ChangePassword;
