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
      </Routes>
      </Container>
      </main>

      <Footer/>
      <ToastContainer />
      
    </>
  );
}

export default App;
