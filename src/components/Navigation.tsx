import {
  Flex,
  Box,
  Button
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import NavItem from './NavItem';
import FB from './Icons/FB';
import IG from './Icons/IG';
import Twitter from './Icons/Twitter';
import YT from './Icons/YT';
import Logo from './Icons/Logo';


function Navigation() {

  const navigate = useNavigate();

  function gotoHome(){ navigate('/'); }

  function gotoDonate(){ navigate('/donate'); }

  function gotoFB(){
    window.open('https://www.facebook.com/groups/2117446001737865', "_blank")
  }

  return (
    <Flex w='100%' h='4.5em' maxH='4.5em' px='5em' zIndex='10' alignItems='center' position='fixed' bg='white' boxShadow='lg'>
      <Box w='10em' minW='10em' cursor='pointer' onClick={gotoHome}>
        <Logo fill='#15316F'/>
      </Box>

      <Flex h='100%' ml='5em'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About Me</NavItem>
        <NavItem to='volunteer'>Volunteer</NavItem>
        <NavItem to='donate'>Donate</NavItem>
        <NavItem to='contact'>Get In Touch</NavItem>
      </Flex>

      <Flex flexGrow='1' justifyContent='flex-end'>
        <Button bg='secondary.100' color='white' px='3em' mr='3.5em' fontWeight='regular' size='md' _hover={{ bg: 'secondary.200' }} onClick={gotoDonate}>Contribute</Button>

        <Flex gridGap="0.9em" alignItems='center'>
          <Box w='1.6em' mr='0.1em'cursor='pointer' onClick={gotoFB}>
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
