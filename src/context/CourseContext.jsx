import { createContext, useState } from 'react';


const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [wishlist, setWishlist] = useState([]);

   
    const availableCourses = [
        {
            id: '1',
            title: 'Node.js for Beginners',
            description: 'Learn the basics of Node.js, from installation to building applications.',
            videoUrl: 'https://youtu.be/BLl32FvcdVM?si=WScvKXMIImkTRCMo',
            imageUrl: 'https://img.freepik.com/free-vector/nodejs-concept-illustration_114360-3094.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=1ebfded84ed39c641dbed51527ee11e6c01f4189ed5e9a9c93407a7850f0d0c0',
            category: 'programming'
        },
        {
            id: '2',
            title: 'React Masterclass',
            description: 'Become a React pro and learn advanced concepts with hands-on projects.',
            videoUrl: 'https://youtu.be/KBWWxJdsFlY?si=Ze25UXwhgr8Elk-s',
            imageUrl: 'https://img.freepik.com/free-vector/react-concept-illustration_114360-3097.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=4563d61bb9be00f9c72f9998afc3d582fbe6eb8d077e80cae1698a99c55ff49a',
            category: 'programming'
        },
        {
            id: '3',
            title: 'JavaScript Essentials',
            description: 'Master the fundamentals of JavaScript, the language of the web.',
            videoUrl: 'https://youtu.be/PkZNo7MFNFg?si=9uhstoIyTKvR6Nvr',
            imageUrl: 'https://img.freepik.com/free-vector/javascript-illustration_114360-3098.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=92b2c3c43acb7714a1715b0a2de74d061a8b1df6e33f14b7775c4a478ec2fc41',
            category: 'programming'
        },
        {
            id: '4',
            title: 'CSS for Beginners',
            description: 'Learn how to style websites with CSS and make them beautiful.',
            videoUrl: 'https://youtu.be/G3e-cpL7ofc?si=w7or1YEGXDrTlkn7',
            imageUrl: 'https://img.freepik.com/free-vector/css-illustration_114360-3099.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=8e261530c440b1871f7e65e7f8671c2759cbb4c47fbb61fdbf99f6a64cc96773',
            category: 'design'
        },
        {
            id: '5',
            title: 'HTML5 & CSS3 Fundamentals',
            description: 'Get started with web development by learning HTML5 and CSS3.',
            videoUrl: 'https://youtu.be/UB1O30fR-EE?si=so2As9z8aCnpMl3G',
            imageUrl: 'https://img.freepik.com/free-vector/html5-css3-concept-illustration_114360-1481.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=8e261530c440b1871f7e65e7f8671c2759cbb4c47fbb61fdbf99f6a64cc96773',
            category: 'design'
        },
        {
            id: '6',
            title: 'Git & GitHub for Beginners',
            description: 'Learn version control with Git and how to collaborate using GitHub.',
            videoUrl: 'https://youtu.be/RGOj5yH7evk?si=2_MHRwEFs93OUv8H',
            imageUrl: 'https://img.freepik.com/free-vector/git-github-concept-illustration_114360-3121.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=4563d61bb9be00f9c72f9998afc3d582fbe6eb8d077e80cae1698a99c55ff49a',
            category: 'marketing'
        },
        {
            id: '7',
            title: 'Full-Stack Web Development with MERN',
            description: 'Build full-stack applications using MongoDB, Express, React, and Node.js.',
            videoUrl: 'https://youtu.be/7CqJlxBYfy8?si=W9LscwRVKDmJbP_i',
            imageUrl: 'https://img.freepik.com/free-vector/fullstack-development-illustration_114360-1912.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=4563d61bb9be00f9c72f9998afc3d582fbe6eb8d077e80cae1698a99c55ff49a',
            category: 'programming'
        },
        {
            id: '8',
            title: 'Introduction to Data Science',
            description: 'Learn the basics of data science, data analysis, and data visualization.',
            videoUrl: 'https://youtu.be/GwIo3gDZCVQ?si=LQ-JkIY1R_0T6GOB',
            imageUrl: 'https://img.freepik.com/free-vector/data-science-illustration_114360-1912.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=4563d61bb9be00f9c72f9998afc3d582fbe6eb8d077e80cae1698a99c55ff49a',
            category: 'programming'
        },
        {
            id: '9',
            title: 'Machine Learning A-Z',
            description: 'Master machine learning with practical, hands-on projects.',
            videoUrl: 'https://youtu.be/0Lt9w-uB0No?si=3LG-wA5_VG3d8gG5',
            imageUrl: 'https://img.freepik.com/free-vector/machine-learning-illustration_114360-1912.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=4563d61bb9be00f9c72f9998afc3d582fbe6eb8d077e80cae1698a99c55ff49a',
            category: 'programming'
        },
        {
            id: '10',
            title: 'Building Responsive Websites',
            description: 'Learn how to create responsive and mobile-friendly websites.',
            videoUrl: 'https://youtu.be/9cKsq14KJsY?si=Uq1jNSYw_7CtNjVb',
            imageUrl: 'https://img.freepik.com/free-vector/responsive-web-design-illustration_114360-1912.jpg?w=1060&t=st=1697739815~exp=1697739875~hmac=4563d61bb9be00f9c72f9998afc3d582fbe6eb8d077e80cae1698a99c55ff49a',
            category: 'design'
        },
    ];

    
    const enrollCourse = (course) => {
        
        if (!enrolledCourses.find(c => c.id === course.id)) {
            setEnrolledCourses((prevCourses) => [...prevCourses, course]);
        }
    };

    const removeCourse = (courseId) => {
        setEnrolledCourses((prevCourses) => prevCourses.filter(course => course.id !== courseId));
    };

    const saveReview = (courseId, review) => {
        setEnrolledCourses((prevCourses) => {
            return prevCourses.map(course =>
                course.id === courseId ? { ...course, review } : course
            );
        });
    };

    const addToWishlist = (course) => {
        if (!wishlist.find(item => item.id === course.id)) {
          setWishlist([...wishlist, course]);
        }
    };
    
    const removeFromWishlist = (courseId) => {
        setWishlist(wishlist.filter(item => item.id !== courseId));
    };

    const markLessonCompleted = (lessonId) => {
        setEnrolledCourses((prevCourses) => {
            return prevCourses.map(course =>
                course.id === lessonId ? { ...course, completed: true } : course
            );
        });
    };

    return (
        <CourseContext.Provider
            value={{
                availableCourses,
                enrolledCourses,
                enrollCourse,
                removeCourse,
                saveReview,
                addToWishlist,
                removeFromWishlist,
                markLessonCompleted,
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export { CourseProvider, CourseContext };
