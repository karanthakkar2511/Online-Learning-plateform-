import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Button, useToast, VStack, HStack, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';
import { useNavigate } from 'react-router-dom';

const LessonPlayer = () => {
    const { lessonId } = useParams();
    const { enrolledCourses, markLessonCompleted } = useContext(CourseContext);
    const navigate = useNavigate();
    const toast = useToast();
    const [review, setReview] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);


    const course = enrolledCourses.find(course => course.id === lessonId);

    if (!course) {
        return <Text>Course not found or you are not enrolled in this course.</Text>;
    }

    const handleMarkCompleted = () => {
        markLessonCompleted(course.id);
        toast({
            title: "Lesson Completed",
            description: "You've marked this lesson as completed. Please provide your review.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
        setModalOpen(true); 
    };

    const handleNextLesson = () => {
       
        navigate('/dashboard');
    };

    const handleSubmitReview = () => {
        
        console.log("Review submitted:", review);

        
        toast({
            title: "Review Submitted",
            description: "Thank you for your review!",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });

        setModalOpen(false); 

       
        navigate('/dashboard');
    };

    return (
        <Box 
            p={5} 
            bgGradient="linear(to-r, teal.400, blue.500)" 
            minH="100vh" 
            borderRadius="lg" 
            boxShadow="lg"
            color="white"
        >
            <Heading as="h2" mb={4} textAlign="center">{course.title}</Heading>
            <VStack spacing={6} align="stretch">
                <Box
                    maxW="full"
                    height="350px"
                    position="relative"
                    borderRadius="lg"
                    boxShadow="xl"
                    overflow="hidden"
                    bg="gray.800"
                >
                    <ReactPlayer
                        url={course.videoUrl}
                        className="react-player"
                        controls={true}
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                    />
                </Box>

                <HStack spacing={4} justify="center">
                    <Button 
                        colorScheme="teal" 
                        onClick={handleMarkCompleted} 
                        _hover={{
                            bg: 'teal.300',
                            transform: 'scale(1.05)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Mark as Completed
                    </Button>
                    <Button 
                        colorScheme="blue" 
                        onClick={handleNextLesson} 
                        _hover={{
                            bg: 'blue.300',
                            transform: 'scale(1.05)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Next Lesson
                    </Button>
                </HStack>
            </VStack>

            {/* Review Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <ModalOverlay />
                <ModalContent 
                    bg="gray.900" 
                    borderRadius="lg" 
                    boxShadow="2xl"
                    color="white"
                >
                    <ModalHeader>Submit Your Review</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            placeholder="Write your review here..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            mb={4}
                            bg="gray.800"
                            borderColor="teal.500"
                            _placeholder={{ color: 'gray.500' }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            colorScheme="teal" 
                            onClick={handleSubmitReview}
                            _hover={{ bg: 'teal.300', transform: 'scale(1.05)' }}
                        >
                            Submit Review
                        </Button>
                        <Button 
                            colorScheme="gray" 
                            onClick={() => setModalOpen(false)} 
                            ml={3}
                            _hover={{ bg: 'gray.600' }}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default LessonPlayer;
