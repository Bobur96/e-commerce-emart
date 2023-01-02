import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/products/:id' element={<Product/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
