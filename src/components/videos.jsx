import { Stack, VStack } from '@chakra-ui/react';
import React from 'react';

const videos = () => {
  const videosArr ={''};
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack w={'full'}>
            <video controls controlsList="nodownload" src="videoSrc" style={{width:'100%'}}> </video>
        </VStack>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample video 1</Heading>
          <Text>
            hdndsnknc,xmcmncx,msskmxs
          </Text>
        </VStack>
        <VStack w={['full', 'xl']} alignItems={"stretch"} p="8" spacing={'8'} overflowY={'auto'}>
          {videosArr.map((item, index)=>(
            <Button variant={'ghost'} colorScheme={'purple'} onClick={() => setVideoSrc(item)}>
            Lecture {index+1}
          </Button>
          ))
        }

        </VStack>
    </Stack>
  )
}

export default videos