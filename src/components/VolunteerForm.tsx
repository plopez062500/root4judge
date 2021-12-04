import { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

export type VolunteerFormData = {
  fname: string,
  lname: string,
  email: string,
  number: string
}

interface VolunteerFormProps {
  onSubmit?: (data: VolunteerFormData) => void,
  disabled?: boolean
}

function VolunteerForm(props: VolunteerFormProps) {

  const { onSubmit, disabled } = props;

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  function submit() {
    if (onSubmit)
      onSubmit({
        fname: fname,
        lname: lname,
        email: email,
        number: number
      });
  }

  return (
    <Flex flexDirection='column' gridGap={5}>
      <Flex gridGap={5} flexGrow='1'>
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

      <FormControl id="number">
        <FormLabel>Best Contact Number</FormLabel>
        <Input type="text" placeholder='(xxx)xxx-xxxx' value={number} onChange={(e) => { setNumber(e.target.value) }} />
      </FormControl>

      <Button isDisabled={disabled} bg='primary.100' color='white' fontWeight='regular' _hover={{ bg: 'primary.200' }} isFullWidth my={4} onClick={submit}>Submit</Button>
    </Flex>
  )
}

export default VolunteerForm
