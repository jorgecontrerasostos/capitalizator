import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";

export const Main = props => {
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      py="8"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      {...props}
    >
      <Box>
        <Heading as="h2" size="4xl" letterSpacing="-.04em" mt={4} mb={8}>
          Paste your title below
        </Heading>
      </Box>
      <Box width="2xl" maxWidth={{ base: "xs", md: "md", lg: "2xl" }}>
        <Input placeholder="insert your title here" type="text" />
        <Input disabled type="text" mt={6} variant="filled" border="1px" />
      </Box>
      <ButtonGroup>
        <Button colorScheme="teal" mt={6}>
          Copy to Clipboard
        </Button>
        <Button colorScheme="teal" mt={6}>
          Clear Fields
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
