import {
  Flex,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import NavItem from './NavItem';
import FB from './Icons/FB';
import IG from './Icons/IG';
import Twitter from './Icons/Twitter';
import YT from './Icons/YT';
import Logo from './Icons/Logo';


function Navigation() {

  const navigate = useNavigate();
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function gotoHome() { navigate('/'); }

  function gotoDonate() { navigate('/donate'); }

  function gotoFB() {
    window.open('https://www.facebook.com/groups/2117446001737865', "_blank")
  }


  return (
    <Flex w='100%' h='4.5em' maxH='4.5em' px={['1.2em', '5em', '5em']} zIndex='10' alignItems='center' justifyContent='space-around' position='fixed' bg='white' boxShadow='lg'>

      <Box w='3em' position='absolute' left='5' display={['inherit', 'none', 'none']} ref={btnRef} onClick={onOpen}>
        <HamburgerIcon color='primary.100' display={['inherit', 'none', 'none']} w='3em' h='2em' />
      </Box>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <NavItem to='/'>Home</NavItem>
{/* {            <NavItem to='/about'>About Me</NavItem>} */}
            <NavItem to='volunteer'>Volunteer</NavItem>
            <NavItem to='donate'>Donate</NavItem>
            <NavItem to='contact'>Get In Touch</NavItem>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


      <Box w={['14em', '10em', '10em']} pr={['2em', '0', '0']} minW='10em' mx='auto' cursor='pointer' onClick={gotoHome}>
        <Logo fill='#15316F' />
      </Box>


      <Flex h='100%' ml='5em' display={['none', 'flex', 'flex']}>
        <NavItem to='/'>Home</NavItem>
{/* {        <NavItem to='/about'>About Me</NavItem> */}
        <NavItem to='volunteer'>Volunteer</NavItem>
        <NavItem to='donate'>Donate</NavItem>
        <NavItem to='contact'>Get In Touch</NavItem>
      </Flex>

      <Flex flexGrow={['0', '1', '1']} justifyContent='flex-end' display={['none', 'flex', 'flex']}>
        <Button bg='secondary.100' color='white' px='3em' mr='3.5em' fontWeight='regular' size='md' _hover={{ bg: 'secondary.200' }} onClick={gotoDonate}>Contribute</Button>

        <Flex gridGap="0.9em" alignItems='center' display={['none', 'flex', 'flex']}>
          <Box w='1.6em' mr='0.1em' cursor='pointer' onClick={gotoFB}>
            <FB fill='#15316F' />
          </Box>
          <Box w='2em' cursor='pointer'>
            <YT fill='#15316F' />
          </Box>
          <Box w='2em' cursor='pointer'>
            <Twitter fill='#15316F' />
          </Box>
          <Box w='2em' cursor='pointer' ml='-0.3em'>
            <IG fill='#15316F' />
          </Box>
        </Flex>
      </Flex>

    </Flex>
  )
}

export default Navigation;
