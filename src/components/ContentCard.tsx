import { Box, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface ContentCardProps {
  title: string,
}

function ContentCard(props: PropsWithChildren<ContentCardProps>) {
  const { title, children } = props

  return (
    <Box w='26em' h='25em' borderRadius='lg' boxShadow='2xl' p='3em'>
      <Text fontSize='2xl' fontWeight='bold' color='primary.100'>{title}</Text>
      <Text mt='1em'>{children}</Text>
    </Box>
  )
}

export default ContentCard
