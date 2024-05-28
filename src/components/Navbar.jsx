import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          PhotoShare
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/profile" px={2}>
            Profile
          </Link>
          <Link as={RouterLink} to="/upload" px={2}>
            Upload
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;