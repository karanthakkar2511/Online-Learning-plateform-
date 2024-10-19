import { Box, Heading, SimpleGrid, Card, CardBody, Text, Button, useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, enrollCourse } = useContext(CourseContext);
  const toast = useToast();

  const handleEnroll = (course) => {
    enrollCourse(course);
    toast({
      title: "Course Enrolled.",
      description: `${course.title} has been added to your dashboard.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleRemoveFromWishlist = (courseId) => {
    removeFromWishlist(courseId);
    toast({
      title: "Removed from Wishlist",
      description: "Course has been removed from your wishlist.",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box p={5} bg="gray.50" minH="100vh"> {}
      <Heading as="h2" mb={5} color="teal.600">Your Wishlist</Heading>
      {wishlist.length === 0 ? (
        <Text fontSize="lg" color="gray.600">You have no courses in your wishlist.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {wishlist.map(course => (
            <Card 
              key={course.id} 
              borderWidth="1px" 
              borderRadius="lg" 
              boxShadow="lg" 
              _hover={{ transform: 'scale(1.05)', transition: '0.3s' }} 
              bg="white"
              borderColor="teal.500"
            >
              <CardBody p={5}> {}
                <Text fontWeight="bold" fontSize="xl" color="teal.700">{course.title}</Text>
                <Text mt={2} mb={4} color="gray.500">{course.description}</Text>
                <Button 
                  mt={3} 
                  colorScheme="teal" 
                  variant="solid" 
                  borderRadius="md" 
                  onClick={() => handleEnroll(course)}
                  _hover={{ bg: 'teal.600' }}
                >
                  Enroll Now
                </Button>
                <Button 
                  mt={3} 
                  ml={3}
                  colorScheme="red" 
                  variant="outline" 
                  borderRadius="md" 
                  onClick={() => handleRemoveFromWishlist(course.id)}
                  _hover={{ bg: 'red.100' }}
                >
                  Remove from Wishlist
                </Button>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Wishlist;
