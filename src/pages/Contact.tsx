import {
  Flex,
  Text,
  useToast
} from "@chakra-ui/react";
import EmailForm, { EmailFormData } from '../components/EmailForm';
import EmailJs from 'emailjs-com';
import { serviceID, messageTempalte, userID } from '../emailjs/Config';
import { addEmailToList } from '../firebase/EmailList';
import { useState } from "react";



function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();


  function emailFormSubmitted(data: EmailFormData) {

    function successToast() {
      toast({
        title: "We've received your message!",
        description: "Your message was sent and has been received.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }

    function errorToast() {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please verify all information is correct. If all information is correct please try again later.",
        status: 'error',
        duration: 15000,
        isClosable: true,
      })
    }

    const templateInfo = {
      name: data.fname + ' ' + data.lname,
      message: data.message
    }

    setSubmitted(true);

    EmailJs.send(serviceID, messageTempalte, templateInfo, userID)
      .then(() => {
        addEmailToList(data.fname, data.lname, data.email)
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
    <Flex w={['90vw', '75vw', '60vw']} pt='8em' h='100vh' mx='auto' flexDirection='column' textAlign='center'>
      <Text fontSize={['3xl', '4xl', '4xl']} p='1em' color='primary.100' fontWeight='medium'>Send Us A Message</Text>
      <EmailForm disabled={submitted} onSubmit={emailFormSubmitted} />
    </Flex>
  )
}

export default Contact
