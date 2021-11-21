import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons';
import FB from "../components/Icons/FB";
import IG from "../components/Icons/IG";
import YT from "../components/Icons/YT";
import Twitter from "../components/Icons/Twitter";


function Footer() {


  return (
    <Box w='100%' py='4em' bg='primary.100' minH='25em' color='white' textAlign='center'> { /** Footer Background */}
      <Flex justifyContent='center' w='60%' mx='auto'> {/** Footer Content Container */}

        <Flex alignItems='center' gridGap={5}> {/** Footer content section */}
          <Flex justifyContent='center' alignItems='center' rounded='50%' bg='white' minW='3.5em' minH='3.5em'> { /** Icon Container */}
            <EmailIcon w='1.7em' h='1.7em' color='primary.100' />
          </Flex>

          <Box minW='11.1em'>
            <Text>P.O. Box 9975, 123 st,</Text>
            <Text>Madisonville KY, 55555</Text>
          </Box>

        </Flex>

        <Box minW='3px' minH='5em' mx='2em' bg='white' />

        <Flex alignItems='center' gridGap={5}> {/** Footer content section */}
          <Flex justifyContent='center' alignItems='center' rounded='50%' bg='white' minW='3.5em' minH='3.5em'> { /** Icon Container */}
            <AtSignIcon w='1.7em' h='1.7em' color='primary.100' />
          </Flex>

          <Text>root4judge@gmail.com</Text>
        </Flex>

        <Box minW='3px' minH='5em' mx='2em' bg='white' />

        <Flex gridGap="1.2em" alignItems='center'>
          <Box w='2em' mr='0.1em' cursor='pointer'>
            <FB fill='white' />
          </Box>
          <Box w='2.4em' cursor='pointer'>
            <YT fill='white' />
          </Box>
          <Box w='2.4em' cursor='pointer'>
            <Twitter fill='white' />
          </Box>
          <Box w='2.4em' cursor='pointer' ml='-0.3em'>
            <IG fill='white' />
          </Box>
        </Flex>

      </Flex>

      <Text mt='8em'>Copyright</Text>
    </Box>
  )
}

export default Footer
