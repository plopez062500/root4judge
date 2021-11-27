import {
  Box,
  Flex,
  Text,
  Button,
  Image
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Logo from "../components/Icons/Logo";
import LandingPhoto from '../assets/ken_with_background.png';
import EmailForm, { EmailFormData } from "../components/EmailForm";

function Home() {


  function emailFormSubmitted(data: EmailFormData) {
    
  }

  return (
    <>
      <Flex h='90vh' justifyContent='center' alignItems='center' backgroundImage={LandingPhoto} backgroundPosition='center' backgroundSize='cover'> {/** Landing  */}

        <Box w='100%' h='100%' top='0' zIndex='0' bg='#2C4987' opacity='45%' ></Box>

        <Box position='absolute' w='45%' minW='29em' mt='12em' textAlign='center' color='white' justifyContent='center' alignItems='center'>

          <Box w='100%' color='white' textAlign='center'>
            <Logo fill='white' />
          </Box>

          <Text my='.8em' fontSize='3xl' letterSpacing='wider'>Experienced ● Dedicated ● Fair</Text>

          <Flex gridGap='15' >
            <Button isFullWidth size='lg' bg='secondary.100' _hover={{ bg: 'secondary.200' }}>Learn More</Button>
            <Button isFullWidth size='lg' bg='secondary.100' _hover={{ bg: 'secondary.200' }}>Join The Campaign</Button>
          </Flex>

        </Box>

      </Flex>

      <Box p='5em' w='70%' mx='auto' textAlign='center'>
        <Text fontSize='5xl' p='1em' color='primary.100' fontWeight='medium'>Send Me A Message</Text>
        <EmailForm onSubmit={emailFormSubmitted} />
      </Box>

      <Footer />
    </>
  )
}

export default Home;
