import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

type EmailFormData = {
  fname: string,
  lname: string,
  email: string,
  message: string
}

interface EmailFormProps {
  onSubmit?: (data: EmailFormData) => void,
}

function EmailForm(props: EmailFormProps) {
  const { onSubmit } = props

  return (
    <>

    </>
  )
}

export default EmailForm
