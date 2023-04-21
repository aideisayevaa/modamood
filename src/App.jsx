import './App.css'
import './Responsive.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SinglePage from './pages/SinglePage'
import About from './pages/About'
import NotFound404 from './pages/NotFound404'
import Contact from './pages/Contact'
import Basket from './pages/Basket'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Shop from './pages/Shop'
import ProductsByCategory from './pages/ProductsByCategory'
import AnimatedCursor from "react-animated-cursor"
import Favorite from './pages/Favorite'
import { AnimatePresence } from "framer-motion";
import Login from './pages/Login'
import ByCategory from './pages/ByCategory'
import PaymentInfo from './pages/PaymentInfo'
import Payment from './pages/Payment'
import SingleBlogPage from './pages/SingleBlogPage'
import Blogs from './pages/Blogs'
function App({ dispatch, basket, favorite, users, messages, products }) {

  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = ["", "single", "about", "contact", "blogs", "basket", "shop", "fav",
    "woman", "men", "kids", "category", "paymentinfo", "payment", "blog"];
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);
  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(products));
  // }, [products]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);
  // useEffect(() => {
  //   localStorage.setItem("activeUser", JSON.stringify(activeUser));
  // }, [activeUser]);
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [pathname])

  useEffect(() => {
    fetch("db.json")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: a.products,
        });
        dispatch({
          type: "SET_CATEGORIES",
          payload: a.categories,
        });
        dispatch({
          type: "SET_SUBCATEGORIES",
          payload: a.subcategories,
        });
      });
  }, [products]);
  // const cursor = document.getElementById("cursor")
  // const cursor_second = document.getElementById("cursor_second")
  // document.addEventListener("mousemove", (e) => {
  //   //clientX clientY
  //   // console.log("X" + e.clientX)
  //   // console.log("Y" + e.clientY)
  //   let x = e.clientX
  //   let y = e.clientY
  //   cursor.style.left = x + "px"
  //   cursor.style.top = y + "px"


  //   cursor_second.style.left = x + "px"
  //   cursor_second.style.top = y + "px"
  // })



  return (
    <>
        <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='247,107,106'
      outerAlpha={0.5}
      innerScale={0.5}
      outerScale={4}
      innerStyle={{
     zIndex:"9999999999",
     outline:"1px solid rgba(248, 192, 156)",
     outlineOffset:"12px"
      }}
    />
      {routes.includes(route) && <Header />}
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/fav" element={<Favorite />} />
          <Route path="/login" element={<Login />} />

          <Route path="/single/:id" element={<SinglePage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          {/* <Route path="/category/:category_name" element={<ForCategory2 />} /> */}
          {/* <Route path="/:category/:subcategory_id" element={<ProductsByCategory />} /> */}
          {/* <Route path="/:category/:subcategory_id" element={<ByCategory />} /> */}
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/singleblog" element={<SingleBlogPage />} /> */}
          {/* <Route path="/:sale" element={<ProductsByCategory />} /> */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </AnimatePresence>
      {routes.includes(route) && <Footer />}
    </>

  )
}
const t = (a) => {
  return {
    basket: a.basket,
    favorite: a.favorite,
  };
};
export default connect(t)(App)