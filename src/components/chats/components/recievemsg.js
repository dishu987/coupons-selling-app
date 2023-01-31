import { Tag, Avatar, Text, TagLabel, Flex } from '@chakra-ui/react';

const RecieveMessage = ({ message, user }) => {
  return (
    <>
      <Flex justifyContent={'flex-start'}>
        <Tag
          size="lg"
          colorScheme="yellow"
          borderRadius="md"
          maxW={'400px'}
          flexWrap={'wrap'}
          p={'10px'}
        >
          <Avatar
            src="https://bit.ly/sage-adebayo"
            size="xs"
            name="Segun Adebayo"
            ml={1}
            mr={2}
          />
          <TagLabel>{user}</TagLabel>
          <Text my={'10px'} mx={'px'} w={'100%'}>
            {message}
          </Text>
        </Tag>
      </Flex>
    </>
  );
};

export default RecieveMessage;
