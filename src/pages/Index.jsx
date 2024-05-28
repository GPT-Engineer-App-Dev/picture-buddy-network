import { Box, Button, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">PhotoShare</Heading>
        <Flex>
          <Button as={Link} to="/" variant="link" color="white" mr={4}>Home</Button>
          <Button as={Link} to="/profile" variant="link" color="white" mr={4}>Profile</Button>
          <Button as={Link} to="/upload" variant="link" color="white">Upload</Button>
        </Flex>
      </Flex>
      <Box textAlign="center" py={10}>
        <VStack spacing={4}>
          <Heading>Welcome to PhotoShare</Heading>
          <Text fontSize="lg">Share your moments with friends and family.</Text>
          <Button colorScheme="blue" size="lg">Sign Up</Button>
          <Button variant="outline" colorScheme="blue" size="lg">Log In</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;