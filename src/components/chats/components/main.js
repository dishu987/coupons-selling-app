import {
  Flex,
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Tag,
  Avatar,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Illustration } from '../../coupons/nothing';
import RecieveMessage from './recievemsg';
import SendMessage from './sendmsg';

const MainMessages = () => {
  return (
    <>
      <Flex
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        flexDirection={'column'}
        h={'83vh'}
      >
        <Stack
          direction={{ base: 'column', md: 'column' }}
          as={'form'}
          spacing={'12px'}
          w={'100%'}
          h={'90vh'}
          overflow={'auto'}
          my="10px"
          borderRadius={'lg'}
          //   onSubmit={}
        >
          <RecieveMessage message={'How are you?'} user={'Guest'} />
          <SendMessage message={'Fine,What about you?'} user={'Me'} />
          <RecieveMessage message={'I am Fine'} user={'Guest'} />
          <RecieveMessage
            message={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          eveniet velit similique vel, nam quo eos dolorum debitis nihil
          blanditiis expedita nostrum optio placeat aliquam, aperiam repellendus
          explicabo possimus rem`}
            user={'Guest'}
          />
          <RecieveMessage message={'How are you?'} user={'Guest'} />
          <SendMessage message={'Fine,What about you?'} user={'Me'} />
          <RecieveMessage message={'I am Fine'} user={'Guest'} />
          <RecieveMessage
            message={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          eveniet velit similique vel, nam quo eos dolorum debitis nihil
          blanditiis expedita nostrum optio placeat aliquam, aperiam repellendus
          explicabo possimus rem`}
            user={'Guest'}
          />
          <RecieveMessage message={'How are you?'} user={'Guest'} />
          <SendMessage message={'Fine,What about you?'} user={'Me'} />
          <RecieveMessage message={'I am Fine'} user={'Guest'} />
          <RecieveMessage
            message={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          eveniet velit similique vel, nam quo eos dolorum debitis nihil
          blanditiis expedita nostrum optio placeat aliquam, aperiam repellendus
          explicabo possimus rem`}
            user={'Guest'}
          />
          <RecieveMessage message={'How are you?'} user={'Guest'} />
          <SendMessage message={'Fine,What about you?'} user={'Me'} />
          <RecieveMessage message={'I am Fine'} user={'Guest'} />
          <RecieveMessage
            message={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          eveniet velit similique vel, nam quo eos dolorum debitis nihil
          blanditiis expedita nostrum optio placeat aliquam, aperiam repellendus
          explicabo possimus rem`}
            user={'Guest'}
          />
          <SendMessage
            message={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          eveniet velit similique vel, nam quo eos dolorum debitis nihil
          blanditiis expedita nostrum optio placeat aliquam, aperiam repellendus
          explicabo possimus rem`}
            user={'Me'}
          />
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          w={'100%'}
          //   onSubmit={}
        >
          <FormControl>
            <Input
              variant={'solid'}
              bg={'transparent'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              _focus={{
                color: 'blue.50',
              }}
              borderColor={useColorModeValue('green.300', 'gray.700')}
              id={'email'}
              type={'text'}
              required
              placeholder={'Type Something..'}
              aria-label={'Type Something.'}
              autoComplete={'off'}
              //   value={email}
              //   disabled={state !== 'initial'}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '15%' }}>
            <Button
              colorScheme={true === 'success' ? 'green' : 'blue'}
              //   isLoading={state === 'submitting'}
              w="100%"
              type={true === 'success' ? 'button' : 'submit'}
            >
              {/* <CheckIcon />*/}
              Send
            </Button>
          </FormControl>
        </Stack>
      </Flex>
    </>
  );
};

export default MainMessages;
