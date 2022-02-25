import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LifestyleDetail from './components/lifestyle/LifestyleDetail';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Contact from './components/Contact';
import Business from './components/Business/Business';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/lifestyle-detail" element={<LifestyleDetail />} />
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/business" element={<Business />}/>
      </Routes>
    </Router>
  );
}
export default App;
