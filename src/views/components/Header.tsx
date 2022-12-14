import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  //useDisclosure,
} from '@chakra-ui/react';

const Header = () => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={4}
      bg='green.500'
      color='white'
      //   {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={'tighter'}>
          Front-end Blog
        </Heading>
      </Flex>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        //display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box
        //display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant='outline'
          _hover={{ bg: 'green.700', borderColor: 'green.700' }}
        >
          SignOut
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
