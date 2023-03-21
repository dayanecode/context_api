import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

// Pages
import NotFound from './pages/NotFound';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />    
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/products*' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
