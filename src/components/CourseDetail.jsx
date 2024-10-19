import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Button, Stack, Image, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

const CourseDetail = () => {
  const { id } = useParams();
  const { enrollCourse, enrolledCourses } = useContext(CourseContext);


  const course = {
    id,
    title: "React for Beginners",
    description: "Learn React from scratch and build modern web applications using hooks, state management, and more.",
    imageUrl: "https://via.placeholder.com/600x400", 
  };

  const isEnrolled = enrolledCourses.some(c => c.id === course.id);

  
  const cardBackgroundColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'white');
  const pageBackgroundColor = useColorModeValue('gray.50', 'gray.800');
  const enrolledTextColor = useColorModeValue('green.600', 'green.300');
  
  return (
    <Box 
      p={6} 
      bg={pageBackgroundColor} 
      minH="100vh" 
      display="flex" 
      justifyContent="center"
      alignItems="center"
    >
      <Box
        maxW="800px"
        w="100%"
        bg={cardBackgroundColor}
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
      >
        {/* Course Image */}
        <Image 
          src={course.imageUrl} 
          alt={course.title} 
          w="100%" 
          h="300px" 
          objectFit="cover" 
        />

        <Box p={6}>
          {/* Course Title */}
          <Heading as="h2" size="xl" color="teal.500">
            {course.title}
          </Heading>
          
          {/* Course Description */}
          <Text mt={4} color={textColor} fontSize="lg">
            {course.description}
          </Text>

          <Stack direction="row" mt={8} spacing={4}>
            {!isEnrolled && (
              <Button
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, blue.600)"
                color="white"
                _hover={{ bgGradient: 'linear(to-r, blue.500, blue.700)' }}
                size="lg"
                onClick={() => enrollCourse(course)}
              >
                Enroll Now
              </Button>
            )}
            {isEnrolled && (
              <Text fontSize="lg" fontWeight="bold" color={enrolledTextColor}>
                You are enrolled in this course.
              </Text>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetail;
