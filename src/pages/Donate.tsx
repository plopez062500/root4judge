import { Flex, Box, Text, Button } from '@chakra-ui/react';
import DonateButton from '../components/DonateButton';

interface Props { }

function Donate(props: Props) {
  const { } = props

  return (
    <Box mx='auto' pt='6em' mb='16em' textAlign='center' height='100%' w='95%' color='primary.100'>
      
      <Text fontSize={['2xl', '2xl', '4xl']} >We are now accepting electronic donations!</Text>
      <Text mt={['1em', '1em', '2em']} mb='1em' fontSize={['2xl']}>Please select your donation size below.</Text>

      <Flex justifyContent="center" alignItems="center" flexWrap='wrap' color="white" gridGap={5}>

          <DonateButton amount={5}/>
          <DonateButton amount={20}/>
          <DonateButton amount={50}/>
          <DonateButton amount={100}/>
          <DonateButton amount={150}/>
          <DonateButton amount={200}/>
          <DonateButton amount={0} custom/>
          
      </Flex>
    </Box>
  )
}

export default Donate

