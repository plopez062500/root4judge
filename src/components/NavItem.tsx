import { PropsWithChildren } from "react"
import { Flex } from "@chakra-ui/react"


interface NavItemProps { }

function NavItem(props: PropsWithChildren<NavItemProps>) {
  const { children } = props;

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
    >

      {children}
    </Flex>
  )
}

export default NavItem
