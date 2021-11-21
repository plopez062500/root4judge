import {
  Flex,
  Box,
  Button
} from '@chakra-ui/react';
import NavItem from './NavItem';
//import { ReactComponent as Logo } from '../assets/Logo.svg';
import FB from './Icons/FB';
import IG from './Icons/IG';
import Twitter from './Icons/Twitter';
import YT from './Icons/YT';
import Logo from './Icons/Logo';


function Navigation() {

  return (
    <Flex h='4.5em' maxH='4.5em' px='5em' alignItems='center' bg='white' boxShadow='lg'>
      <Box w='10em' minW='10em' cursor='pointer'>
        <Logo fill='#15316F'/>
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
            <FB fill='#15316F'/>
          </Box>
          <Box w='2em' cursor='pointer'>
            <YT fill='#15316F'/>
          </Box>
          <Box w='2em' cursor='pointer'>
            <Twitter fill='#15316F'/>
          </Box>
          <Box w='2em' cursor='pointer' ml='-0.3em'>
            <IG fill='#15316F'/>
          </Box>
        </Flex>
      </Flex>

    </Flex>
  )
}

export default Navigation;
