import { Container, Flex } from "@chakra-ui/react";

export const Main = (props) => {
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      py="16"
      bg="tomato"
      {...props}
    >
      <Container>Main</Container>
    </Flex>
  );
};
