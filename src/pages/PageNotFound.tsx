import { Flex, Text } from '@chakra-ui/react';

interface Props {}

function PageNotFound(props: Props) {
  const {} = props

  return (
    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
      <Text fontSize='4xl'>Oops! It looks like this page is not available.</Text>
    </Flex>
  )
}

export default PageNotFound
