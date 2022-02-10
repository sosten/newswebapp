import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LifestyleDetail from './components/lifestyle/LifestyleDetail';
import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/lifestyle-detail" element={<LifestyleDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
