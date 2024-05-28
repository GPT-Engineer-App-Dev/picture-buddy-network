import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to PhotoShare</Text>
        <Text fontSize="xl" textAlign="center">
          Share your moments with friends and family. Join now to start uploading and sharing your photos!
        </Text>
        <Button as={RouterLink} to="/signup" colorScheme="teal" size="lg">
          Sign Up
        </Button>
        <Button as={RouterLink} to="/login" colorScheme="teal" size="lg" variant="outline">
          Log In
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;