import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
