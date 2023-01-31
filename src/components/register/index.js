import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import UserAvatar from '../navbar/userAvator';
import { registerUser } from './registerUser';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Form1 = ({ handleChange, user }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="mobile"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          Mobile Number
        </FormLabel>
        <Input
          type="text"
          name="mobile"
          id="mobile"
          isDisabled={true}
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={user.mobile}
        />
      </FormControl>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            name="name"
            onChange={handleChange}
            value={user.name}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          onChange={handleChange}
          name="email"
          value={user.email}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            onChange={handleChange}
            name="password"
            value={user.password}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ handleChange, user }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="hostel"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
        >
          Hostel
        </FormLabel>
        <Select
          id="hostel"
          name="hostel"
          onChange={handleChange}
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={user.hostel}
        >
          <option>Satluj East</option>
          <option>Satluj West</option>
          <option>Beas East</option>
          <option>Beas West</option>
          <option>Chenab West</option>
          <option>Chenab East</option>
          <option>Raavi East</option>
          <option>Raavi East</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="room"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          Room Number
        </FormLabel>
        <Input
          type="text"
          name="room"
          onChange={handleChange}
          id="room"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={user.room}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="batch"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          Batch
        </FormLabel>
        <Input
          type="text"
          name="batch"
          onChange={handleChange}
          id="batch"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="i.e. 2020 Batch"
          value={user.batch}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="degree"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
        >
          Degree
        </FormLabel>
        <Select
          id="degree"
          name="degree"
          onChange={handleChange}
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={user.degree}
        >
          <option>BTECH</option>
          <option>BTECH</option>
          <option>PHD</option>
          <option>MSC</option>
        </Select>
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <SimpleGrid columns={1} spacing={6}>
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Final Submit
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default function Register() {
  const { mobile } = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: '',
    mobile: atob(mobile),
    hostel: '',
    room: '',
    degree: '',
    batch: '',
    is_staff: 'false',
  });
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  async function handleSubmit(e) {
    if (
      (user.name === '') |
      (user.batch === '') |
      (user.degree === '') |
      (user.email === '') |
      (user.hostel === '') |
      (user.mobile === '') |
      (user.password === '') |
      (user.room === '')
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
    Object.assign(user, { password2: user.password });
    setLoading(true);
    await registerUser(user, toast, dispatch, navigate);
    setLoading(false);
    return;
  }
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 handleChange={handleChange} user={user} />
        ) : step === 2 ? (
          <Form2 handleChange={handleChange} user={user} />
        ) : (
          <Form3 handleChange={handleChange} user={user} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              isLoading={loading}
              loadingText="Submitting"
              isDisabled={(step === 2) | (step === 1)}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
