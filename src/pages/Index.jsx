import React from "react";
import { Box, Flex, Heading, Image, SimpleGrid, Stack, Text, Button, Container, useColorModeValue, Icon, Spacer } from "@chakra-ui/react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  // Sample data for featured movie and movie list
  const featuredMovie = {
    title: "The Grand Journey",
    description: "An epic adventure of a lifetime.",
    imageUrl: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlZCUyMG1vdmllfGVufDB8fHx8MTcxMDI2NTM2MXww&ixlib=rb-4.0.3&q=80&w=1080', // Placeholder for an image URL
  };

  const movies = [
    { title: "Adventure Island", imageUrl: 'https://images.unsplash.com/photo-1486324461499-e5473c429107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZXxlbnwwfHx8fDE3MTAyNjUzNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { title: "Space Explorers", imageUrl: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG1vdmllfGVufDB8fHx8MTcxMDI2NTM2Mnww&ixlib=rb-4.0.3&q=80&w=1080' },
    { title: "The Lost City", imageUrl: 'https://images.unsplash.com/uploads/1413259835094dcdeb9d3/6e609595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbW92aWV8ZW58MHx8fHwxNzEwMjY1MzYzfDA&ixlib=rb-4.0.3&q=80&w=1080' },
    // Add more movies here...
  ];

  return (
    <Box>
      {/* Header */}
      <Flex px={8} py={4} justifyContent="space-between" bg={useColorModeValue("gray.100", "gray.900")}>
        <Heading as="h1" size="lg">
          PrimeMovie
        </Heading>
        <Button colorScheme="blue">Sign In</Button>
      </Flex>

      {/* Featured Movie */}
      <Box position="relative" height="500px" bgImage={featuredMovie.imageUrl} bgSize="cover" bgPosition="center">
        <Container maxW="container.lg" height="100%">
          <Flex direction="column" justifyContent="center" alignItems="start" height="100%">
            <Heading as="h2" size="3xl" color="white">
              {featuredMovie.title}
            </Heading>
            <Text fontSize="lg" color="white" my={4}>
              {featuredMovie.description}
            </Text>
            <Stack direction="row" spacing={4}>
              <Button leftIcon={<FaPlay />} colorScheme="red">
                Play
              </Button>
              <Button leftIcon={<FaInfoCircle />} colorScheme="green">
                More Info
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Movie List */}
      <Container maxW="container.lg" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          Movies
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
          {movies.map((movie, index) => (
            <Box key={index} boxShadow="md" borderRadius="lg" overflow="hidden">
              <Image src={movie.imageUrl} alt={movie.title} />
              <Text p={2} fontWeight="bold" textAlign="center">
                {movie.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Flex px={8} py={4} justifyContent="center" bg={useColorModeValue("gray.100", "gray.900")}>
        <Text>&copy; {new Date().getFullYear()} PrimeMovie. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
