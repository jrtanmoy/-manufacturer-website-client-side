import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ToolDetail from './Pages/Home/ToolDetail';
import Login from './Pages/Login/Login';
import Contact from './Pages/Shared/Contact';
import Navbar from './Pages/Shared/Navber';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/purchase/:toolId'
          element={
              <ToolDetail />
            } />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blogs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
