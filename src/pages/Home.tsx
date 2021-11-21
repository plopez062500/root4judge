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

function Home() {


  return (
    <>
      <Flex justifyContent='center' alignItems='center' h='90vh' > {/** Landing  */}

        <Box h='97.7vh' top='0' overflow='hidden' position='absolute' zIndex='-1'>
          <Image src={LandingPhoto}/>
        </Box>

        <Box w='100%' h='97.7vh' top='0' position='absolute' zIndex='-1' bg='#2C4987' opacity='45%' ></Box>

        <Box>

          <Box w='45em' minW='45em' color='white' textAlign='center' cursor='pointer'>
            <Logo fill='white'/>
            <Text my='.8em' fontSize='3xl'>Some Tagline Will Go Here</Text>

            <Flex gridGap='15'>
              <Button isFullWidth size='lg' bg='secondary.100' _hover={{ bg: 'secondary.200' }}>Learn More</Button>
              <Button isFullWidth size='lg' bg='secondary.100' _hover={{ bg: 'secondary.200' }}>Join The Campaign</Button>
            </Flex>
          </Box>

        </Box>

      </Flex>

      <Box h='50vh' p='5em'>
        <Text>Text</Text>
      </Box>

      <Footer />
    </>
  )
}

export default Home;
