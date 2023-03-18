import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      role="navigation"
      bg="white"
      height="80px"
      alignItems="center"
    >
      <Box>
        <Heading as="h2" size="2xl" letterSpacing="-.04em" fontWeight="bolder">
          Capitalizator
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <MoonIcon boxSize={8} cursor="pointer" />
      </Box>
    </Flex>
  );
};
