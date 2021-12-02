import { AspectRatio } from '@chakra-ui/react';

interface YoutubeVideoProps {
  src: string
  title: string
}

function YoutubeVideo(props: YoutubeVideoProps) {
  const { src, title } = props

  return (
    <AspectRatio w='38em' ratio={16 / 9}>
      <iframe
        title={title}
        src={src}
        allowFullScreen
      />
    </AspectRatio>
  )
}

export default YoutubeVideo
