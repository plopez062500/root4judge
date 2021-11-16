import {
  Flex,
  Box,
  Button
} from '@chakra-ui/react';
import NavItem from './NavItem';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as IG } from '../assets/ig.svg';
import { ReactComponent as FB } from '../assets/fb.svg';
import { ReactComponent as YT } from '../assets/yt.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';


function Navigation() {

  return (
    <Flex h='4.5em' maxH='4.5em' px='5em' alignItems='center' boxShadow='lg'>
      <Box w='10em' cursor='pointer'>
        <Logo />
      </Box>

      <Flex h='100%' ml='5em'>
        <NavItem>Home</NavItem>
        <NavItem>About Me</NavItem>
        <NavItem>Events</NavItem>
        <NavItem>Donate</NavItem>
        <NavItem>Get In Touch</NavItem>
      </Flex>

      <Flex flexGrow='1' justifyContent='flex-end'>
        <Button bg='secondary.100' color='white' px='3em' mr='3.5em' fontWeight='regular' size='md' _hover={{ bg: 'secondary.200' }}>Contribute</Button>

        <Flex gridGap="0.9em" alignItems='center'>
          <Box w='1.6em' mr='0.1em'cursor='pointer'>
            <FB />
          </Box>
          <Box w='2em' cursor='pointer'>
            <YT />
          </Box>
          <Box w='2em' cursor='pointer'>
            <Twitter />
          </Box>
          <Box w='2em' cursor='pointer' ml='-0.3em'>
            <IG />
          </Box>
        </Flex>
      </Flex>


    </Flex>
  )
}

export default Navigation;
