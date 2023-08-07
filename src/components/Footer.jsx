import React from 'react';
import { Box, Heading, HStack, VStack, Button, Stack } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import { Input } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={"stretch"} w={"full"} px={'4'}>
                <Heading size="md" textTransform={'uppercase'} textAlign={'center','left'}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py="2">
                    <Input placeholder="Enter your Email" border={'none'} borderRadius="none" Outline={'none'} focusBordeeColor="none" />
                    <Button p={"0"} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={"full"} borderLeft={["none", '1px solid white']} borderRight={["none", '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VIDEO HUB
                </Heading>
                <Text>All rights reserved</Text>

            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social media
                </Heading>
                <Button variant={'link'} colorScheme={'whiye'}>
                    <a target={'black'} href=" ">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiye'}>
                    <a target={'black'} href=" ">Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiye'}>
                    <a target={'black'} href=" ">Linkedin</a>
                </Button>
            </VStack>
        </Stack>

    </Box>
  )
};

export default Footer;