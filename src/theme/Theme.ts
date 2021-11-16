import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#15316F',
      200: '#3F5C9B'
    },
    secondary: {
      100: '#C72E2E',
      200: '#D46262'
    }
  },
  
  Button: {
    variants: {
      "primary": {
        bg: 'primary.100',
        color: 'white'
      }
    }
  }
});

export const Colors = {
  primary: '#15316F',
  secondary: '#C72E2E'
}