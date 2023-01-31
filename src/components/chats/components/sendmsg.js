import { Tag, Avatar, Text, TagLabel, Flex } from '@chakra-ui/react';

const SendMessage = ({ message, user }) => {
  return (
    <>
      <Flex justifyContent={'flex-end'}>
        <Tag
          size="lg"
          colorScheme="green"
          borderRadius="md"
          maxW={'400px'}
          flexWrap={'wrap'}
          p={'10px'}
          justifyContent={'flex-end'}
        >
          <TagLabel>{user}</TagLabel>
          <Avatar
            src="https://bit.ly/sage-adebayo"
            size="xs"
            name="Segun Adebayo"
            ml={2}
            mr={2}
          />
          <Text my={'10px'} mx={'5px'} w={'100%'}>
            {message}
          </Text>
        </Tag>
      </Flex>
    </>
  );
};

export default SendMessage;
