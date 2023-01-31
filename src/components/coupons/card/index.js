import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Skeleton,
  useToast,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { DeleteCoupon } from '../deleteCoupon';
import { fetchCouponsData } from '../fetchCoupons';

export default function CouponCard({ isLoaded, coupon }) {
  const [color, setColor] = useState('green');
  const [loading, setLoading] = useState(false);
  const { id } = useSelector(state => state.getprofile).result;
  const auth = useSelector(state => state.getuser);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    if (coupon.expired) {
      setColor('gray');
    } else if (coupon.time == 'Lunch') {
      setColor('pink');
    } else if (coupon.time === 'Breakfast') {
      setColor('yellow');
    } else {
      setColor('green');
    }
  }, []);
  async function handleDelete() {
    setLoading(true);
    const success = await DeleteCoupon(
      coupon.id,
      auth.result.token.refresh,
      auth.result.token.access,
      dispatch,
      toast
    );
    setLoading(false);
    if (success) {
      toast({
        title: 'Success',
        description: 'Coupon Deleted',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: 'invalid id',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    fetchCouponsData(dispatch);
    return;
  }
  return (
    <>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue(`${color}.100`, 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        m={4}
        userSelect={coupon.expired ? 'none' : ''}
        cursor={coupon.expired ? 'not-allowed' : 'pointer'}
      >
        <Skeleton isLoaded={isLoaded}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
          >
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue(`${color}.50`, `${color}.900`)}
              p={2}
              px={3}
              color={`${color}.500`}
              rounded={'full'}
              opacity={coupon.expired ? '0.5' : '1'}
            >
              {coupon.title}
            </Text>
            <Stack
              direction={'row'}
              align={'center'}
              justify={'center'}
              opacity={coupon.expired ? '0.5' : '1'}
            >
              <Text fontSize={'3xl'}>Rs.</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                {coupon.price}
              </Text>
              <Text color={'gray.500'}>/{coupon.mess}</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3} opacity={coupon.expired ? '0.5' : '1'}>
              <ListItem>
                <ListIcon as={CheckIcon} color={`${color}.400`} />
                {coupon.mess}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={`${color}.400`} />
                10% off
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={`${color}.400`} />
                {coupon.date}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color={`${color}.400`} />
                Coupon {coupon.time}
              </ListItem>
            </List>
            <Button
              mt={10}
              as={Link}
              to={loading | coupon.expired ? '' : `/profile/${coupon.user}`}
              w={id == parseInt(coupon.user) ? '82%' : 'full'}
              bg={`${color}.400`}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: `${color}.500`,
              }}
              _focus={{
                bg: `${color}.500`,
              }}
              isDisabled={loading | coupon.expired}
            >
              {!coupon.expired ? 'Contact' : 'Expired'}
            </Button>
            {id == parseInt(coupon.user) && (
              <Button
                mt={10}
                w={'10%'}
                mx={'5px'}
                bg={`red.500`}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: `red.400`,
                }}
                _focus={{
                  bg: `red.400`,
                }}
                isLoading={loading}
                onClick={handleDelete}
              >
                <DeleteIcon />
              </Button>
            )}
          </Box>
        </Skeleton>
      </Box>
    </>
  );
}
