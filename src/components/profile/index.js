import { Flex, Skeleton } from '@chakra-ui/react';
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
import BreadCrumbs from '../breadcrubs';
const breadData = [
  {
    title: 'Home',
    link: '/',
    current: false,
    isDisabled: true,
  },
  {
    title: 'All Coupons',
    link: '/coupons',
    current: false,
    isDisabled: false,
  },
  {
    title: 'Contact',
    link: '',
    current: true,
    isDisabled: false,
  },
];
const Profile = () => {
  let { id } = useParams();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [hostel, setHostel] = useState('');
  const [room, setRoom] = useState('');
  const [degree, setDegree] = useState('');
  const [batch, setBatch] = useState('');
  const [loaded, setLoading] = useState(false);
  async function FetchData(userid) {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/user/profile/user_profile/?userid=${userid}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
          return;
        }
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
    setEmail(res.email);
    setName(res.name);
    setBatch(res.batch);
    setDegree(res.degree);
    setHostel(res.hostel);
    setMobile(res.mobile);
    setRoom(res.room);
    setLoading(true);
    return;
  }
  useEffect(() => {
    FetchData(id);
  }, []);
  return (
    <>
      <BreadCrumbs data={breadData} />
      <Flex
        minH={'85vh'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
        >
          <Skeleton isLoaded={loaded}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {name}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={loaded}>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              {email}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={loaded}>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
            >
              {hostel}, {room}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={loaded}>
            <Stack
              align={'center'}
              justify={'center'}
              direction={'column'}
              mt={6}
            >
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #Batch {batch}
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #Degree {degree}
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #Mobile {mobile}
              </Badge>
            </Stack>
          </Skeleton>
        </Box>
      </Flex>
    </>
  );
};
export default Profile;
