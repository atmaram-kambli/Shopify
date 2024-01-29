import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import banner_img_1 from './Components/Assets/logo.png';
import banner_img_2 from './Components/Assets/logo.png';
import banner_img_3 from './Components/Assets/logo.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={banner_img_1} category={"Men"} />} />
          <Route path='/women' element={<ShopCategory banner={banner_img_2} category={"Women"} />} />
          <Route path='/kids' element={<ShopCategory banner={banner_img_3} category={"Kids"} />} />
          <Route path='/product' element={<Product /> }>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
