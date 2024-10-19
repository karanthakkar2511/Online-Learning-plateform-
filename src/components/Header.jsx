import { Box, Flex, Button, Stack, useBreakpointValue, Switch, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); 


  const headerFontSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box 
      bgGradient="linear(to-r, teal.500, blue.500)" 
      px={6}
      py={4}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }} 
      >
        {/* Logo Link */}
        <RouterLink to="/">
          <Button 
            variant="link" 
            color="white" 
            fontSize={headerFontSize} 
            fontWeight="bold"
            _hover={{ textDecoration: 'underline', color: 'whiteAlpha.800' }} 
          >
            CourseApp
          </Button>
        </RouterLink>
        
        {/* Navigation Buttons */}
        <Stack 
          direction={{ base: 'column', md: 'row' }} 
          alignItems="center"
          spacing={{ base: 3, md: 5 }} 
          mt={{ base: 4, md: 0 }}
        >
          <RouterLink to="/catalog">
            <Button 
              variant="link" 
              color="white" 
              _hover={{ 
                padding: "12px",
                color: 'blue.500', 
                bg: 'white', 
                borderRadius: 'md', 
                boxShadow: 'lg', 
                transform: 'scale(1.08)', 
                transition: 'all 0.3s ease', 
              }}
            >
              Course Catalog
            </Button>
          </RouterLink>
          
          <RouterLink to="/dashboard">
            <Button 
              variant="link" 
              color="white" 
              _hover={{ 
                padding: "12px",
                color: 'blue.500', 
                bg: 'white', 
                borderRadius: 'md', 
                boxShadow: 'lg',
                transform: 'scale(1.08)', 
                transition: 'all 0.3s ease', 
              }}
            >
              Dashboard
            </Button>
          </RouterLink>
          
          {/* Color Mode Switch */}
          <Flex alignItems="center">
            <Switch
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
              colorScheme="blue"
              mr={2} 
            />
            <Button variant="link" color="white">
              {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
