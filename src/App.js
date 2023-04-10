import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ourstore from './Pages/Ourstore';
import Blogs from './Pages/Blogs';
import './App.scss';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="ourstore" element={<Ourstore />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
