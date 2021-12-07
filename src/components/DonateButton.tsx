import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface DonateButtonProps {
  amount: number
  custom?: boolean
}

function DonateButton(props: DonateButtonProps) {
  const { amount, custom } = props

  function popup(){
    //window.open(`https://donorbox.org/root-for-judge?default_interval=o&amount=${amount}`);
  }

  return (
    <Flex  py='0.8em' w={['90%', '80%', '40%']} bg="primary.100" justifyContent='center' alignItems="center" rounded='lg' cursor='pointer' onClick={popup}>
      <a className="dbox-donation-button" style={{ width: '100%', height: '100%', display: 'inline-block', padding: '3.5 0.8' }} href={`https://donorbox.org/root-for-judge?default_interval=o&amount=${amount}`}>
        {custom ? 'Custom' : `$${amount}`}
      </a>
    </Flex>
  )
}

export default DonateButton
