import { Box, Heading, Button, Text, useToast, SimpleGrid, Card, CardBody, Image, Stack, Divider, Input, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';
import { useTranslation } from 'react-i18next';

const UserDashboard = () => {
    const { enrolledCourses, removeCourse, saveReview } = useContext(CourseContext);
    const [reviewText, setReviewText] = useState('');
    const toast = useToast();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleViewCourse = (course) => {
        toast({
            title: t("Viewing Course"),
            description: `${t("You are now viewing the course")}: ${course.title}.`,
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
    };

    const handleWatchLesson = (course) => {
        toast({
            title: t("Watching Lesson"),
            description: `${t("You are now watching the lesson for")}: ${course.title}.`,
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
    };

    const handleRemoveCourse = (course) => {
        removeCourse(course.id);
        toast({
            title: t("Course Removed"),
            description: `${course.title} ${t("has been removed from your enrolled courses")}.`,
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
    };

    const handleReviewSubmit = (courseId) => {
        saveReview(courseId, reviewText);
        setReviewText('');
        toast({
            title: t("Review Submitted"),
            description: t("Your review has been submitted."),
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
        });
    };

    const handleDownloadCertificate = (course) => {
        const certificateContent = `
      ${t("Certificate of Completion")}
      ${t("This certifies that the student has successfully completed the course")}: ${course.title}.
    `;
        const blob = new Blob([certificateContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${course.title}_Certificate.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <Box p={{ base: 6, md: 8 }} maxW="1200px" mx="auto" bg="gray.50" borderRadius="md">
            <Heading as="h2" mb={6} textAlign="center" fontSize={{ base: "2xl", md: "3xl" }}>{t("Your Enrolled Courses")}</Heading>

            {/* Language Toggle Button */}
            <HStack justifyContent="center" mb={6} spacing={4}>
                <Button onClick={() => changeLanguage('en')} colorScheme="blue" size="lg">
                    English
                </Button>
                <Button onClick={() => changeLanguage('fr')} colorScheme="blue" size="lg">
                    Français
                </Button>
            </HStack>

            {enrolledCourses.length === 0 ? (
                <Text textAlign="center" fontStyle="italic" fontSize="lg">{t("You haven't enrolled in any courses yet.")}</Text>
            ) : (
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
                    {enrolledCourses.map(course => (
                        <Card key={course.id} borderWidth="1px" borderRadius="lg" boxShadow="lg" overflow="hidden" _hover={{ boxShadow: 'xl' }}>
                            <CardBody>
                                <Image
                                    src={course.imageUrl}
                                    borderRadius="md"
                                    alt={course.title}
                                    height={{ base: "150px", md: "200px" }}
                                    objectFit="cover"
                                    width="100%"
                                />
                                <Stack mt={4} spacing={5}>
                                    <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} noOfLines={1}>
                                        {course.title}
                                    </Text>
                                    <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} noOfLines={2}>
                                        {course.description}
                                    </Text>
                                    <Divider />

                                    <HStack spacing={4} mt={4} flexDirection={{ base: "column", sm: "row" }}>
                                        <Link to={`/course/${course.id}`} onClick={() => handleViewCourse(course)} width={{ base: "full", sm: "auto" }}>
                                            <Button colorScheme="blue" variant="outline" width="full" _hover={{ bg: "blue.50" }}>
                                                {t("View Course")}
                                            </Button>
                                        </Link>
                                        <Link to={`/lesson/${course.id}`} onClick={() => handleWatchLesson(course)} width={{ base: "full", sm: "auto" }}>
                                            <Button colorScheme="green" variant="solid" width="full" _hover={{ bg: "green.500" }}>
                                                {t("Watch Lesson")}
                                            </Button>
                                        </Link>
                                    </HStack>

                                    <HStack spacing={4} mt={2} flexDirection={{ base: "column", sm: "row" }}>
                                        <Button
                                            colorScheme="red"
                                            variant="outline"
                                            onClick={() => handleRemoveCourse(course)}
                                            width={{ base: "full", sm: "auto" }}
                                            _hover={{ bg: "red.50" }}
                                        >
                                            {t("Remove Course")}
                                        </Button>
                                        <Button
                                            colorScheme="yellow"
                                            padding="10px"
                                            variant="solid"
                                            onClick={() => handleDownloadCertificate(course)}
                                            width={{ base: "full", sm: "auto" }}
                                            _hover={{ bg: "yellow.400" }}
                                        >
                                            {t("Download Certificate")}
                                        </Button>
                                    </HStack>

                                    <Input
                                        placeholder={t("Give your opinion...")}
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        mt={4}
                                        bg="white"
                                        borderRadius="md"
                                    />
                                    <Button
                                        colorScheme="teal"
                                        onClick={() => handleReviewSubmit(course.id)}
                                        mt={3}
                                        width="full"
                                        _hover={{ bg: "teal.500" }}
                                    >
                                        {t("Submit Review")}
                                    </Button>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
};

export default UserDashboard;
