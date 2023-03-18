import { Text, Flex, Box } from "@chakra-ui/react";

export const Footer = props => {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      {...props}
      bg="tomato"
      direction="column"
      align-itmes="center"
      justifyContent="center"
      maxWidth="2xl"
    >
      <Text textAlign="center">
        This is a simple web app that capitalizes a heading or subheading
        following certain rules. This website was made using NextJS and Chakra
        UI.
      </Text>
    </Flex>
  );
};
