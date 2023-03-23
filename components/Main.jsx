import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ButtonGroup
} from '@chakra-ui/react';
import { useState } from 'react';
import noCapitalizeWords from '@/data/noCapitalizeWords';

export const Main = (props) => {
  const [title, setTitle] = useState('');

  const capitalizeHeading = (e) => {
    setTitle(e.target.value);
  };

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
      <Box width="2xl" maxWidth={{ base: 'xs', md: 'md', lg: '2xl' }}>
        <Input
          placeholder="insert your title here"
          type="text"
          onChange={capitalizeHeading}
          value={title}
        />
        <Input
          disabled
          type="text"
          mt={6}
          variant="filled"
          border="1px"
          value={title}
        />
      </Box>
      <ButtonGroup>
        <Button colorScheme="teal" mt={6}>
          Copy to Clipboard
        </Button>
        <Button colorScheme="teal" mt={6} onClick={() => setTitle('')}>
          Clear Fields
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
