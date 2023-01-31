import ChatroomMain from '.';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const size = 'full';
  useEffect(() => {
    onOpen();
  });
  const sizes = ['full'];
  return (
    <>
      <Modal
        onClose={() => {
          navigate(-1);
        }}
        size={size}
        isOpen={isOpen}
        h={'100vh'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ChatroomMain />
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChatModel;
