import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';


function App() {
  return (
    <div className="App">
  <Navigation/>
  <div>
  {/*<HomePage/> */}
  
{/*<Product/>*/}

{/*<ProductDetails/>*/}
<Cart/>

  </div>
  <Footer/>
    </div>
  );
}

export default App;
