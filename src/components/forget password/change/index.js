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
import ForgetChangePasswordForm from './card';

const ForgetChangePassword = () => {
  const { uid, token } = useParams();
  return (
    <>
      <Flex
        minH={'81vh'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ForgetChangePasswordForm uid={uid} token={token} />
      </Flex>
    </>
  );
};
export default ForgetChangePassword;
