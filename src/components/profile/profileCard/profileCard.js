import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../auth/logout';
import { fetchProfileData } from '../../auth/fetchProfileData';

export default function ProfileCard() {
  let profile = useSelector(state => state.getprofile).result;
  const auth = useSelector(state => state.getuser);
  const isLoggedIn =
    useSelector(state => state.VERIFY_AUTH).result.isLoggedIn | false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      fetchProfileData(
        auth.result.token?.refresh,
        auth.result.token?.access,
        dispatch
      );
    }
  }, []);
  return (
    <Box
      maxW={'320px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
    >
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {profile?.name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {profile?.email}
      </Text>
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}
      >
        {profile?.hostel}, {profile?.room} ,#
        {profile?.is_staff ? 'Staff' : 'Normal'}
      </Text>

      <Stack align={'center'} justify={'center'} direction={'column'} mt={6}>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
        >
          #Batch {profile?.batch}
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
        >
          #Degree {profile?.degree}
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
        >
          #Mobile {profile?.mobile}
        </Badge>
      </Stack>
      <Stack mt={8} direction={'row'} spacing={4}>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'red.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'red.500',
          }}
          _focus={{
            bg: 'red.500',
          }}
          onClick={() => {
            LogoutUser(dispatch);
            window.location.push('/');
          }}
        >
          Logout
        </Button>
      </Stack>
      <Stack mt={8} direction={'row'} spacing={4}>
        <Button
          as={Link}
          to="change-password"
          colorScheme="blue"
          variant="link"
          flex={1}
        >
          Change Password
        </Button>
      </Stack>
    </Box>
  );
}
