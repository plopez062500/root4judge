import { useState } from 'react';
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
  disabled?: boolean
}

function EmailForm(props: EmailFormProps) {

  const { onSubmit, disabled } = props;

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
    <Flex w='100%' flexDirection='column' gridGap={5}>
      <Flex gridGap={5}>
        <FormControl id="fname">
          <FormLabel>First Name</FormLabel>
          <Input name='fname' type="text" placeholder='First name' value={fname} onChange={(e) => { setFname(e.target.value) }} />
        </FormControl>

        <FormControl id="lname">
          <FormLabel>Last Name</FormLabel>
          <Input name='lname' type="text" placeholder='Last name' value={lname} onChange={(e) => { setLname(e.target.value) }} />
        </FormControl>
      </Flex>


      <FormControl id="email">
        <FormLabel>Email Name</FormLabel>
        <Input name='email' type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
      </FormControl>

      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea name='message' type="text" placeholder='Message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
      </FormControl>

      <Button disabled={disabled} size='lg' bg='primary.100' color='white' fontWeight='regular' _hover={{ bg: 'primary.200' }} isFullWidth my={4} onClick={submit}>Submit</Button>
    </Flex>
  )
}

export default EmailForm
