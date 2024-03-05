import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, useDisclosure, DrawerBody, VStack, HStack } from '@chakra-ui/react';
// import { useDispatch } from 'react-redux';
import { RiDashboardFill, RiLoginBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
// import { logout as logoutUser } from '../../../redux/actions/userAction';
import PropTypes from 'prop-types';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link to={url} onClick={onClose}>
        <Button variant="ghost">
            {title}
        </Button>
    </Link>
);




const Header = ({ isAuthenticated = false, user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const dispatch = useDispatch();
    const logout = () => {
        onClose();
        // dispatch(logoutUser());
    };
    return (
        <>
            <ColorModeSwitcher />
            <Button
                colorScheme="yellow"
                width={12}
                height={12}
                rounded="full"
                position="fixed"
                top={6}
                left={6}
                onClick={onOpen}
                zIndex="overlay"
            >
                <RiMenu5Fill />
            </Button>
            <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay backdropFilter="blur(10px)" />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Vinidra Exam</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} alignItems="flex-start">
                            <LinkButton url="/" title="Home" onClose={onClose} />
                            <LinkButton url="/courses" title="Browser All Courses" onClose={onClose} />
                            <LinkButton url="/request" title="Request a Course" onClose={onClose} />
                            <LinkButton url="/contact" title="Contact Us" onClose={onClose} />
                            <LinkButton url="/about" title="About" onClose={onClose} />
                        </VStack>
                        <HStack justifyContent="space-evenly" position="absolute" bottom="2rem" width="80%">
                            {isAuthenticated ? (
                                <VStack>
                                    <HStack>
                                        <Link to="/profile" onClick={onClose}>
                                            <Button colorScheme="yellow" variant="ghost">Profile</Button>
                                        </Link>
                                        <Button variant="ghost" onClick={logout}>
                                            <RiLoginBoxLine />
                                            Logout
                                        </Button>
                                    </HStack>
                                    {user && user.role === 'admin' && (
                                        <Link to="/admin/dashboard" onClick={onClose}>
                                            <Button colorScheme="purple" variant="ghost">
                                                <RiDashboardFill style={{ margin: '4px' }} />
                                                DashBoard
                                            </Button>
                                        </Link>
                                    )}
                                </VStack>
                            ) : (
                                <>
                                    <Link to="/login" onClick={onClose}>
                                        <Button colorScheme="yellow">Login</Button>
                                    </Link>
                                    <span> | </span>
                                    <Link to="/register" onClick={onClose}>
                                        <Button colorScheme="yellow">Sign Up</Button>
                                    </Link>
                                </>
                            )}
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
LinkButton.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func,
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
};