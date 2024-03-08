import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Start from './components/Start';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/start" element={<Start />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </>
    );
}


export default App;
