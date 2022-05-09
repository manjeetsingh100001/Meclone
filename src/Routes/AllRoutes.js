import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import CartRoutes from "./CartRoutes";
import NavBar from "../Components/Navbar";
import Home from "../Pages/home";
import Category from "../Pages/catagorypage"
import { SignUp } from "../Pages/SignUp";
import { Productadd } from "../Pages/SingleDetailProduct";
import { Otp } from "../Pages/Otp";
// import AddProductPage from "../Pages/Seller Portal/AddProductPage";
import Login_input from "../Pages/Seller/SellerPage";
import CheckoutPage from "../Pages/Cart/CheckoutPage";
import PaymentPage from "../Pages/Cart/PaymentPage";
import SummaryPage from "../Pages/Cart/SummaryPage";
import Cart from "../Pages/Cart/Cart";
import About from "../Components/NavBar/About";
import Footer from "../Components/NavBar/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Upperbar from "../Pages/Seller/seller_home/Navbar_seller"
import Lowerbar from "../Pages/Seller/seller_home/Footer_seller"
import Sellerlogin from "../Pages/Seller/sellerloginsignup/sellerlgin"
import SellerData from "../Pages/Seller/seller_data/sellerData"

 const newHistory = createBrowserHistory();
const AllRoutes = ()=>{
    return (
        <>
                <Switch>
                    <Route exact path="/">
                        <NavBar />
                        <Home/>
                        <Footer />
                      <About />
                    </Route>
                    <Route exact={true} path="/category">
                        <NavBar/>
                        <Category/>
                        <Footer />
                        <About />
                    </Route>
                    <Route exact={true} path="/signup">
                        <SignUp />
                        <Footer />
                      <About />
                    </Route>
                    <Route exact={true} path="/otp">

                        <Otp />
                        <Footer />
                        <About />
                    </Route>
                    <Route exact={true} path="/sellerLogin">

                      <Sellerlogin/>
                        <Footer />
                        <About />
                    </Route>
                    <Route exact={true} path="/sellerData">
                    <NavBar/>
                       <SellerData/>
                       <Footer />
                         <About />
                           </Route> 

                    <Route exact path="/cart/checkout/form"> 
                     <CheckoutPage />
                     <Footer />
                     <About />
                    </Route> 
                    <Route exact path="/cart/payment/detail">

                    <PaymentPage />
                    <Footer />
                   <About />
                  </Route>
                  <Route exact path="/cart/summary/detail">
                    <SummaryPage />
                    <Footer />
                  <About />
                     </Route>
                     <Route exact path="/cart">
                      <Cart />
                      <Footer />
                     <About />
                     </Route>
                    <Route exact={true} path="/:q/:id">
                        <NavBar/>
                        <Productadd />
                    </Route>
                    <Route exact={true} path="/seller">
                        
                        {/* <AddProductPage /> */}
                        <Upperbar/>
                        <Login_input/>
                       <Lowerbar/>
                    </Route>
                    
                    <Route path="/cart">
                        <CartRoutes />
                    </Route>
                </Switch>
        </>
    )
}
export default AllRoutes