import { Avatar, Box, keyframes } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from '@chakra-ui/react';
import ProfileCard from '../../profile/profileCard/profileCard';

export default function UserAvatar() {
  const size = '40px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Box
            as="div"
            position="relative"
            w={size}
            h={size}
            _before={{
              content: "''",
              position: 'relative',
              display: 'block',
              width: '300%',
              height: '300%',
              boxSizing: 'border-box',
              marginLeft: '-100%',
              marginTop: '-100%',
              borderRadius: '50%',
              bgColor: color,
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
          >
            <Avatar src="" size="full" position="absolute" top={0} />
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <ProfileCard open_as="auth_user" />
        </PopoverContent>
      </Popover>
    </>
  );
}
