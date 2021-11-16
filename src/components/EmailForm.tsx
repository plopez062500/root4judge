import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react';

export type EmailFormData = {
  fname: string,
  lname: string,
  email: string,
  message: string
}

interface EmailFormProps {
  onSubmit?: (data: EmailFormData) => void,
}

function EmailForm(props: EmailFormProps) {

  const { onSubmit } = props;

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function submit() {
    if (onSubmit)
      onSubmit({
        fname: fname,
        lname: lname,
        email: email,
        message: message
      });
  }

  return (
    <>
      <Flex gridGap={5}>
        <FormControl id="fname">
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder='First name' value={fname} onChange={(e) => { setFname(e.target.value) }} />
        </FormControl>

        <FormControl id="lname">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder='Last name' value={lname} onChange={(e) => { setLname(e.target.value) }} />
        </FormControl>
      </Flex>


      <FormControl id="email">
        <FormLabel>Email Name</FormLabel>
        <Input type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
      </FormControl>

      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea type="text" placeholder='Message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
      </FormControl>

      <Button bg='primary.100' color='white' fontWeight='regular' _hover={{ bg: 'primary.200' }} isFullWidth my={4} onClick={submit}>Submit</Button>
    </>
  )
}

export default EmailForm
