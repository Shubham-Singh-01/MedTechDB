import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './Components/Navbar'
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

function App() {
    return (
        <>
            <Router>
                <Navbar />
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
            </Router>
        </>
    );
}

export default App;