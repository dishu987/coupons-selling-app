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

const ChangePassword = () => {
  return (
    <>
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
