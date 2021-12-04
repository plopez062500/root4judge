
import {
  Box,
  Text,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import VolunteerForm, { VolunteerFormData } from '../components/VolunteerForm';
import EmailJs from 'emailjs-com';
import { serviceID, volunteerTemplate, userID } from '../emailjs/Config';
import { addVolunteerToList } from '../firebase/EmailList';



function Volunteer() {

  const toast = useToast();
  const [submitted, setSubmitted] = useState(false);

  function volunteerFormSubmitted(data: VolunteerFormData) {
    const templateInfo = {
      name: data.fname,
      email: data.email
    }

    function successToast(){
      toast({
        title: "You're all signed up!",
        description: "We've added you to our list of volunteers. You should get an email shortly",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }

    function errorToast(){
      toast({
        title: "Oops!",
        description: "Something went wrong. Please verify all information is correct. If all information is correct please try again later.",
        status: 'error',
        duration: 15000,
        isClosable: true,
      })
    }

    setSubmitted(true);

    EmailJs.send(serviceID, volunteerTemplate, templateInfo, userID)
      .then(() => {
        addVolunteerToList(data.fname, data.lname, data.email, data.number)
          .then(successToast)
          .catch(() => {
            errorToast();
            setSubmitted(false);
          });
      }).catch(() => {
        errorToast();
        setSubmitted(false);
      });
  }

  return (
    <Box w={['90vw', '75vw', '60vw']} pt='8em' h='100vh' mx='auto'  flexDirection='column' textAlign='center'>
      <Text fontSize={['xl', '2xl', '4xl']} p='1em' color='primary.100' fontWeight='medium'>Fill out the quick form below to be added to list of our volunteers</Text>
      <VolunteerForm disabled={submitted} onSubmit={volunteerFormSubmitted} />
    </Box>
  )
}

export default Volunteer