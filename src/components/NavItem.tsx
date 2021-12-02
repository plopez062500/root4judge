import { PropsWithChildren } from "react"
import { Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router";


interface NavItemProps { 
  to?: string
}

function NavItem(props: PropsWithChildren<NavItemProps>) {
  const { to, children } = props;

  const navigate = useNavigate();

  function go(){
    if (to)
      navigate(to);
  }

  return (
    <Flex 
      h='100%' 
      px='0.8em' 
      color='primary.100' 
      alignItems='center'
      fontSize='18px'
      transition='all' 
      transitionDuration='50ms' 
      cursor='pointer' 
      _hover={{ borderBottom: 'solid 3px', borderColor: 'primary.100' }}
      onClick={go}
    >

      {children}
    </Flex>
  )
}

export default NavItem
