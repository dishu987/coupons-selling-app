import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { AddCouponRequest } from './addrequest';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshTokenRequest } from '../../auth/refreshToken';

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
const validateDate = date1 => {
  const date2 = formatDate(new Date());
  if (date1 < date2) {
    return false;
  } else {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 2);
    if (formatDate(newDate) < date1) {
      return false;
    }
    return true;
  }
};
export default function AddCoupon() {
  const auth = useSelector(state => state.getuser);
  const toast = useToast();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState({
    title: '',
    price: '',
    mess: '',
    date: '',
    time: '',
  });
  const handleChange = event => {
    setCoupon({ ...coupon, [event.target.name]: event.target.value });
  };
  async function handleAddCoupon(e) {
    e.preventDefault();
    if (
      (coupon.time === '') |
      (coupon.date === '') |
      (coupon.mess === '') |
      (coupon.title === '') |
      (coupon.price === '')
    ) {
      toast({
        title: 'Error',
        description: 'Fill Required Fields First',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (!validateDate(coupon.date)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid date',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    setLoading(true);
    await AddCouponRequest(
      coupon,
      auth.result.token.access,
      dispatch,
      auth.result.token.refresh,
      toast
    );
    setLoading(false);
    return;
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Add a Coupon{' '}
          </Heading>{' '}
          <Text fontSize={'lg'} color={'gray.600'}>
            to sell✌️{' '}
          </Text>{' '}
        </Stack>{' '}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleAddCoupon} noValidate>
              <FormControl id="mess" isRequired>
                <FormLabel> Mess </FormLabel>{' '}
                <Select
                  id="mess"
                  name="mess"
                  autoComplete="mess"
                  placeholder="Select mess"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleChange}
                >
                  <option value={'Bhopal'}> Bhopal </option>{' '}
                  <option value={'Kanaka'}> Kanaka </option>{' '}
                </Select>{' '}
              </FormControl>{' '}
              <FormControl id="time" isRequired>
                <FormLabel> Time </FormLabel>{' '}
                <Select
                  id="time"
                  name="time"
                  autoComplete="time"
                  placeholder="Select time"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  onChange={handleChange}
                >
                  <option value={'Breakfast'}> Breakfast </option>{' '}
                  <option value={'Lunch'}> Lunch </option>{' '}
                  <option value={'Dinner'}> Dinner </option>{' '}
                </Select>{' '}
              </FormControl>{' '}
              <FormControl id="firstName" isRequired>
                <FormLabel> Title </FormLabel>{' '}
                <Textarea size="sm" name="title" onChange={handleChange} />{' '}
              </FormControl>{' '}
              <HStack>
                <FormControl id="price" isRequired>
                  <FormLabel> Price </FormLabel>{' '}
                  <Input
                    name="price"
                    errorBorderColor="crimson"
                    type="text"
                    onChange={handleChange}
                  />{' '}
                </FormControl>{' '}
                <FormControl id="date" isRequired>
                  <FormLabel> Date </FormLabel>{' '}
                  <Input
                    type="date"
                    placeholder="Outline"
                    name="date"
                    onChange={handleChange}
                  />{' '}
                </FormControl>{' '}
              </HStack>{' '}
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Please wait.."
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={loading}
                  leftIcon={<AddIcon />}
                >
                  Add{' '}
                </Button>{' '}
              </Stack>{' '}
            </form>{' '}
          </Stack>{' '}
        </Box>{' '}
      </Stack>{' '}
    </Flex>
  );
}
