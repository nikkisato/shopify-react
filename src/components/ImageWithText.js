import React from 'react'
import { Box, Button, Text, Image, Flex, Heading } from "@chakra-ui/react"

const ImageWithText = ({ reverse, image, heading, text, button }) => {

    const reverseSection = reverse ? "row-reverse" : "row"
  return (
    <Box>
        <Flex flexDir={[ 'column', reverseSection ]} w="100%">
            <Image src={ image } objectFit="cover" w={[ "100%" , "50%"]}/>
            <Flex w={[ "100%" , "50%"]} flexDir="column" alignItems="center" justifyContent="center" p="2rem">
                <Heading p="2rem">
                    {heading && heading}
                </Heading>
                <Text  p="2rem">
                    { text && text }
                </Text>
                <Button w="10rem" backgroundColor="#FF38BD" _hover={{ opacity: "70%" }}>
                    Buy Now
                </Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default ImageWithText