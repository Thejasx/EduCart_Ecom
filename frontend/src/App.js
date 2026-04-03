// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import{ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PrivateRoute from "./components/PrivateRoute";
import PaymentScreen from "./screens/PaymentScreen";

function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
      <Container>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path='/cart' element={<CartScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        
        <Route path='' element={<PrivateRoute/>}>
          <Route path='/shipping' element={<ShippingScreen/>}/>
          <Route path='/payment' element={<PaymentScreen/>}/>
        </Route>

      </Routes>
      </Container>
      </main>

      <Footer/>
      <ToastContainer />
      
    </>
  );
}

export default App;
