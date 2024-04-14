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
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/start" element={<PrivateRoute />}>
                    <Route path="/start" element={<Start />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}


export default App;
