
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import ProductDetail from './components/Products/ProductDetail';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './routes/PrivateRoute';
import ProductList from './components/Products/ProductList';

function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Navbar />} >
  <Route index element={<Home />} />
           
             

              <Route path="contact" element={<Contact />} />
           

            <Route path="product" element={<Product />}>

            <Route path="list" element={<ProductList />} />
              <Route path="detail" element={<ProductDetail />} />

            </Route>
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="*" element={<PageNotFound />} />



          </Route>

        </Routes>



      </BrowserRouter>


      <Footer />
    </div>
  );
}

export default App;
