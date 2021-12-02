import {
  Box,
  Flex,
  Text,
  Button,
  AspectRatio
} from "@chakra-ui/react";
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

  return (
    <>
      <Flex minW='100vw' h='90vh' justifyContent='center' alignItems='center' backgroundImage={LandingPhoto} backgroundPosition='center' backgroundSize='cover'> {/** Landing  */}

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

      <Flex mt='5em' w='100%' justifyContent="center" flexWrap='wrap' gridGap={14} textAlign='center'>

        <ContentCard title='Experienced'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis obcaecati nam quod quam ipsa praesentium! Quos possimus illum facere hic eum esse? Dignissimos vero, molestiae corporis fugiat est deleniti.
        </ContentCard>

        <ContentCard title='Dedicated'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis obcaecati nam quod quam ipsa praesentium! Quos possimus illum facere hic eum esse? Dignissimos vero, molestiae corporis fugiat est deleniti.
        </ContentCard>

        <ContentCard title='Fair'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis obcaecati nam quod quam ipsa praesentium! Quos possimus illum facere hic eum esse? Dignissimos vero, molestiae corporis fugiat est deleniti.
        </ContentCard>

      </Flex>

      <Flex mt='5em' w='100%' justifyContent='center' flexWrap='wrap' gridGap={14} textAlign='center'>
        <YoutubeVideo title='placeholder' src='https://www.youtube.com/embed/ScMzIvxBSi4'/>
        <YoutubeVideo title='placeholder' src='https://www.youtube.com/embed/ScMzIvxBSi4'/>
        <YoutubeVideo title='placeholder' src='https://www.youtube.com/embed/ScMzIvxBSi4'/>
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
