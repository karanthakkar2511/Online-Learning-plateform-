import { 
    Box, 
    Heading, 
    Text, 
    Button, 
    SimpleGrid, 
    Image, 
    Input, 
    HStack, 
    Tag, 
    useColorModeValue 
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CourseCatalog = () => {
    const { availableCourses, enrollCourse } = useContext(CourseContext);
    const toast = useToast();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All'); 

    const categories = ['All', 'Programming', 'Design', 'Marketing']; 

    const handleEnroll = (course) => {
        enrollCourse(course);
        toast({
            title: "Course Added.",
            description: `${course.title} has been successfully added to your dashboard.`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
        navigate('/dashboard');
    };

    const filteredCourses = availableCourses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase())
    );

    const cardBackgroundColor = useColorModeValue("white", "gray.700");
    const pageBackgroundColor = useColorModeValue("gray.50", "gray.800");

    return (
        <Box p={5} bg={pageBackgroundColor} minH="100vh">
            <Heading as="h2" mb={5} textAlign="center" color="teal.600">
                Course Catalog
            </Heading>
            <Input
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                mb={5}
                size="lg"
                bg="white"
                border="1px"
                borderColor="gray.300"
                _placeholder={{ color: "gray.500" }}
            />
            <HStack spacing={4} wrap="wrap" mb={8} justifyContent="center">
                {categories.map(category => (
                    <Tag
                        key={category}
                        size="lg"
                        variant={selectedCategory === category ? 'solid' : 'outline'}
                        colorScheme={selectedCategory === category ? 'teal' : 'gray'}
                        cursor="pointer"
                        onClick={() => setSelectedCategory(category)}
                        px={4}
                        py={2}
                    >
                        {category}
                    </Tag>
                ))}
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {filteredCourses.map(course => (
                    <Box
                        key={course.id}
                        bg={cardBackgroundColor}
                        borderWidth={1}
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
                    >
                        <Image
                            src={course.imageUrl}
                            alt={course.title}
                            width="100%"
                            height="auto"
                            objectFit="cover"
                            maxH="200px"
                        />
                        <Box p={4}>
                            <Text fontWeight="bold" fontSize="xl" color="teal.600">
                                {course.title}
                            </Text>
                            <Text mt={2} color="gray.600" noOfLines={3}>
                                {course.description}
                            </Text>
                            <Button
                                colorScheme="teal"
                                color="white"
                                bgGradient="linear(to-r, teal.400, teal.600)"
                                mt={4}
                                w="full"
                                onClick={() => handleEnroll(course)}
                            >
                                Enroll in Course
                            </Button>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default CourseCatalog;
