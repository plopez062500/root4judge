import {
  Box,
  Flex,
  Text,
  Button,
  SlideFade
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import Footer from "../components/Footer";
import Logo from "../components/Icons/Logo";
import LandingPhoto from '../assets/ken_with_background.png';
import EmailForm, { EmailFormData } from "../components/EmailForm";
import EmailJs from 'emailjs-com';
import { serviceID, userID, messageTempalte } from '../emailjs/Config';
import ContentCard from "../components/ContentCard";
import YoutubeVideo from "../components/YoutubeVideo";
import { addEmailToList } from '../firebase/EmailList';

function Home() {

  const navigate = useNavigate();
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollOffset(window.pageYOffset);
    }
  })

  function emailFormSubmitted(data: EmailFormData) {
    const templateInfo = {
      name: data.fname + ' ' + data.lname,
      message: data.message
    }

    EmailJs.send(serviceID, messageTempalte, templateInfo, userID)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      });

    addEmailToList(data.fname, data.lname, data.email)
      .catch(err => console.error(err));
  }

  function gotoVolunteer() {
    navigate('/volunteer');
  }

  function gotoDonate() {
    navigate('/donate');
  }

  return (
    <>
      <Flex minW='100%' h='90vh' justifyContent='center' alignItems='center' backgroundImage={LandingPhoto} backgroundPosition='center' backgroundSize='cover'> {/** Landing  */}

        <Box w='100%' h='100%' top='0' zIndex='0' bg='#2C4987' opacity='45%' ></Box>


        <Box position='absolute' w='45%' minW='29em' mt={['12em', '15em', '15em']} textAlign='center' color='white' justifyContent='center' alignItems='center'>
          <SlideFade in={true} delay={.6}>
            <Box w={['80%', '100%', '100%']} mx={['auto']} color='white' textAlign='center'>
              <Logo fill='white' />
            </Box>

            <Text my='.8em' fontSize={['xl', '3xl', '3xl']} letterSpacing='wider'>Experienced ● Dedicated ● Fair</Text>

            <Flex gridGap='15' flexWrap={['wrap', 'nowrap', 'nowrap']} >
              <Button w={['75%']} mx={['auto']} size='lg' bg='secondary.100' _hover={{ bg: 'secondary.200' }} onClick={gotoDonate}>Donate</Button>
              <Button w={['75%']} mx={['auto']} size='lg' bg='secondary.100' _hover={{ bg: 'secondary.200' }} onClick={gotoVolunteer}>Join The Campaign</Button>
            </Flex>
          </SlideFade >
        </Box>


      </Flex>

      <Flex mt='5em' w='100%' justifyContent="center" flexWrap='wrap' gridGap={14} textAlign='center'>

        <SlideFade in={scrollOffset > 300}>
          <ContentCard title='Experienced'>
            Represented people in over 5000 cases in District Court in nine Kentucky counties, primarily in Hopkins County.  Represented clients in District, Juvenile, and Circuit Court.  Demonstrated a true knowledge of the laws and procedures of District Court.
          </ContentCard>
        </SlideFade>


        <SlideFade in={scrollOffset > 300} delay={0.3}>
          <ContentCard title='Dedicated'>
            A demonstrated track record of working to meet and exceed expectations.  Committed to improving Hopkins County District Court to meet the needs of the community.
          </ContentCard>
        </SlideFade>


        <SlideFade in={scrollOffset > 300} delay={.6}>
          <ContentCard title='Fair'>
            Committed to treating every person who enters Hopkins County District Court fairly and with respect.
          </ContentCard>
        </SlideFade>


      </Flex>

      <Flex mt='5em' w='100%' h='15em' alignItems='center' justifyContent='center' flexWrap='wrap' gridGap={14} textAlign='center'>
        {/* {<YoutubeVideo title='placeholder' src='https://www.youtube.com/embed/ScMzIvxBSi4' />
        <YoutubeVideo title='placeholder' src='https://www.youtube.com/embed/ScMzIvxBSi4' />
        <YoutubeVideo title='placeholder' src='https://www.youtube.com/embed/ScMzIvxBSi4' />} */}
        <Text> No media content available right now. </Text>
      </Flex>

      <Box p={['1.1em', '5em', '5em']} w={{ lg: '70%', md: '70%', sm: '98%' }} mx='auto' textAlign='center'>
        <Text fontSize={['3xl', '5xl', '5xl']} p='1em' color='primary.100' fontWeight='medium'>Send Us A Message</Text>
        <EmailForm onSubmit={emailFormSubmitted} />
      </Box>

    </>
  )
}

export default Home;
