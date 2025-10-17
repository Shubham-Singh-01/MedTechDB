import './App.css';
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import LoginSelect from './Pages/LoginSelect'
import Login from './Pages/Login';
import LoginDoctor from './Pages/LoginDoctor';
import Signup from './Pages/Signup';
import SignupDoctor from './Pages/SignupDoctor';
import Start from './Pages/Start';
import StartDoctor from './Pages/StartDoctor';
import UserDetailsPage from './Pages/UserDetailsPage';
import About from './Pages/About';
import ImageGallery from './Pages/ImageGallery';
import Contact from './Pages/Contact';
import PrivateRoute from './PrivateRoute';

// Component to scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll with smooth behavior
        try {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } catch (error) {
            // Fallback
            window.scrollTo(0, 0);
        }
        // Backup scroll methods
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return null;
}

// Component to conditionally render footer
function ConditionalFooter() {
    const location = useLocation();
    
    // Pages where footer should be visible
    const footerPages = ['/', '/about', '/contact', '/ImageGallery'];
    
    // Check if current path is in the footerPages array
    const showFooter = footerPages.includes(location.pathname);
    
    return showFooter ? <Footer /> : null;
}

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <div style={{ flex: 1 }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/LoginSelect" element={<LoginSelect/>}/>
                            <Route path="/login" element={<Login />} />
                            <Route path="/loginDoctor" element={<LoginDoctor />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/signupDoctor" element={<SignupDoctor />} />
                            <Route path="/UserDetailsPage" element={<UserDetailsPage/>} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/ImageGallery" element={<ImageGallery />} />

                            <Route element={<PrivateRoute />}>
                                <Route path="/start" element={<Start />} />
                                <Route path="/startDoctor" element={<StartDoctor />} />
                            </Route>
                        </Routes>
                    </div>
                    <ConditionalFooter />
                </div>
            </Router>
        </>
    );
}

export default App;