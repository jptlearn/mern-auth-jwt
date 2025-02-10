import { Container, Flex, Box, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex minH="100vh" align="center" justify="center">
      <Container mx="auto" maxW="md" py={12} px={6} textAlign="center">
        <Heading fontsize="4xl" mb={8}>
          Sign into your accoung
        </Heading>
      </Container>
    </Flex>
  );
};

export default Login;
