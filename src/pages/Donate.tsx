import { Flex, Text } from '@chakra-ui/react';

interface Props {}

function Donate(props: Props) {
  const {} = props

  return (
    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
      <Text fontSize='4xl'>Unfortunlty we are not accepting electronic donations at this time. :(</Text>
    </Flex>
  )
}

export default Donate
