import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Hero from '../components/Hero';
import { Autoplay, EffectFade } from "swiper";
// import { EffectFade } from 'swiper';
// import { Pagination } from 'swiper';
// import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/effect-fade';
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import "swiper/css/effect-creative";
import { useEffect, useState, useRef } from 'react'
import { EffectCreative, Navigation } from "swiper";
import '../App.css'
import "swiper/css/navigation";
import { connect } from 'react-redux'
import { motion } from "framer-motion";
import Product from '../components/Product';
import ProductModal from '../components/ProductModal';
import { Link } from "react-router-dom";
// import { motion, transform } from "framer-motion";
import Swal from 'sweetalert2'
import Faqs from '../components/Faqs';

function Home({ basket, dispatch, favorite, aLang, t, users, singleuser, blogs ,products}) {
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const getInfo = async () => {
    //         let info = await fetch("http://localhost:2407/products").then((a) =>
    //             a.json()
    //         );
    //         // info = info.filter((a) => a.category === category.id);
    //         setProducts(info);
    //     };
    //     getInfo();
    //     setLoading(false)
    // }, []);


    const [openProductModal, setOpenProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [heroSlide, setHeroSlide] = useState(1)
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [singleCount, setSingleCount] = useState(1)
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };
    const [btnDis, setBtnDis] = useState(true)

    const filteredProducts =
        selectedFilter === 'all'
            ? products
            : products.filter((product) => product.status === selectedFilter);


    const addBasket = (id, singleCount) => {
        if (selectedColor !== "" && selectedSize !== "") {
            setBtnDis(false)
            dispatch({
                type: "SET_BASKET",
                payload: [...basket, { id: id, count: singleCount, size: selectedSize, color: selectedColor }],
            });
            setSelectedColor("")
            setSelectedSize("")
        }
        else {
            setBtnDis(true)
        }

    };
    const handleClick = () => {
        if (selectedColor !== "" && selectedSize !== "") {
            setBtnDis(false)
        }
        else {
            setBtnDis(true)
        }

    }

    const removeBasket = (id) => {
        Swal.fire({
            title: t[aLang].swalQues,
            // text: "deqiq olsun",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: t[aLang].yes,
            cancelButtonText: t[aLang].no,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: "SET_BASKET",
                    payload: [...basket.filter((t) => t.id !== id)],
                });
                Swal.fire({
                    title: t[aLang].swalRemove,
                    // text: "....",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    title: t[aLang].swalNotRemove,
                    // text: "....",
                    icon: "warning",
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        });
    };

    const addFavorite = (id) => {
        dispatch({
            type: "SET_FAVORITE",
            payload: [...favorite, { id: id, count: 1 }],
        });
    };
    const removeFavorite = (id) => {
        dispatch({
            type: "SET_FAVORITE",
            payload: [...favorite.filter((t) => t.id !== id)],
        });
    };

    useEffect(() => {
        AOS.init();
    }, [])
    let titleTranslate = "title_" + aLang
    useEffect(() => {
        let singleUser = users?.find((user) => user.active) ? users.find((user) => user.active) : {
            name: "",
            email: "",
            phone: "",
            password: "",
            passwordAgain: "",
            active: false
        }
        // console.log("tek user hansi ki reducere gonderilecek : " + singleUser?.name + singleUser?.active)
        dispatch({
            type: "SET_SINGLE_USER",
            payload: singleUser,
        });
    }, [users])


    // let lengthWin = 700
    // let overlay = document.querySelector(".overlay")
    // let iLength = Math.floor(700 / 30)
    // for (let i = 0; i < iLength; i++) {
    //     let img = document.createElement("img")
    //     img.setAttribute("src", overlayArray[0])
    //     img.style.width = "30px";
    //     overlay.append(img)
    // }
    console.log(window.screenY)
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [selectedOverlay, setSelectedOverlay] = useState({
        id: 0,
        status: false
    })
    const nav = useNavigate();
    const [selectedCat, setSelectedCat] = useState("")
    const [selectedSubCat, setSelectedSubCat] = useState("")
    const handleCategoryClick = () => {
        // console.log("handleCategoryClick")
        // console.log("handleClickCat : " + selectedCat)
        dispatch({
            type: "SET_CATEGORY",
            payload: selectedCat,
        });
        dispatch({
            type: "SET_SUBCATEGORY",
            payload: selectedSubCat,
        });
        nav("/shop")

    }
    const handleShopNav = () => {
        dispatch({
            type: "SET_CATEGORY",
            payload: "",
        });
        dispatch({
            type: "SET_SUBCATEGORY",
            payload: "",
        });
        nav("/shop")
    }
    const handleSaleClick = () => {
        dispatch({
            type: "SET_CATEGORY",
            payload: "sale",
        });
        nav("/shop")
    }


    const [socials, setSocials] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 400 || window.pageYOffset < 900) {
                setSocials(true);
            } else {
                setSocials(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
       
               <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
               <button
                   id="fixed__button"
                   className={showButton ? 'show' : ''}
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                   <i className="fa-solid fa-chevron-up"></i>
               </button>
               {/* <div className="fixed__button">
                   <a href="#hero"> <i className="fa-solid fa-chevron-up"></i></a>
               </div> */}


               {/* Hero */}
               <div className="container__full">
                   <section id='hero'  >
                       <Swiper
                           navigation={true}
                           grabCursor={true}
                           speed={1400}
                           effect={"creative"}
                           loop={true}
                           creativeEffect={{
                               prev: {
                                   origin: "left center",
                                   translate: ["-5%", 0, -200],
                                   rotate: [0, 100, 0],
                               },
                               next: {
                                   origin: "right center",
                                   translate: ["5%", 0, -200],
                                   rotate: [0, -100, 0],
                               },
                           }}
                           autoplay={{
                               delay: 3500,
                           }}

                           modules={[Autoplay, EffectCreative, Navigation]}
                           className="mySwiper6"
                       >
                           <SwiperSlide data-aos="fade-up"
                               data-aos-anchor-placement="top-bottom" data-aos-duration="1500" >
                               <img className='hero__bg' src="https://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-20.jpg" alt="" />
                               <img className='hero__content' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-22.png" alt="" />
                               <div className='hero__buttons'>
                                   <Link to={"/about"}>   <button className="btn btn-learn">{t[aLang].learnMore}</button></Link>
                                   <Link onClick={handleShopNav} to={"/shop"}>  <button className="btn btn-shop">{t[aLang].shopNow}</button></Link>
                               </div>
                           </SwiperSlide>
                           <SwiperSlide>
                               <img className='hero__bg' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-26.jpg" alt="" />
                               <img className='hero__content' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-24.png" alt="" />
                               <div className='hero__buttons' >
                                   <Link to={"/about"}>   <button className="btn btn-learn">{t[aLang].learnMore}</button></Link>
                                   <Link onClick={handleShopNav} to={"/shop"}>  <button className="btn btn-shop">{t[aLang].shopNow}</button></Link>
                               </div>
                           </SwiperSlide>
                           <SwiperSlide>
                               <img className='hero__bg' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-27.jpg" alt="" />
                               <img className='hero__content' src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider-05/slider-25.png" alt="" />
                               <div className='hero__buttons'>
                                   <Link onClick={handleShopNav} to={"/shop"}>  <button className="btn btn-shop">{t[aLang].shopNow}</button></Link>
                               </div>
                           </SwiperSlide>
                       </Swiper>

                   </section>
               </div>
               <ul className="socials" data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom" data-aos-duration="1500"  >
                   <li>
                       <motion.section initial={{ opacity: 0, transform: "translateY(200%)" }} animate={{ opacity: 1, transform: "translateY(0%)" }} transition={{ duration: 0.4 }}>
                           <a target={"_blank"} href="https://www.instagram.com/modamood2023/?igshid=YmMyMTA2M2Y%3D"><i className="fa-brands fa-instagram"></i><span>{t[aLang].instagram}</span></a></motion.section></li>
                   <li>
                       <motion.section initial={{ opacity: 0, transform: "translateY(200%)" }} animate={{ opacity: 1, transform: "translateY(0%)" }} transition={{ duration: 0.6 }}>
                           <a target={"_blank"} href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a><span>{t[aLang].facebook}</span></motion.section></li>
                   <li>
                       <motion.section initial={{ opacity: 0, transform: "translateY(200%)" }} animate={{ opacity: 1, transform: "translateY(0%)" }} transition={{ duration: 0.8 }}>
                           <a target={"_blank"} href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a><span>{t[aLang].twitter}</span></motion.section></li>

                   <li className="socials-arrow"></li>
               </ul>
               {/* Categories */}
               <section data-aos="fade-up"
                   data-aos-duration="1000">
                   <div className="container">
                       <div className="categories">
                           <div className="catItem " >
                               <div className="bigCat" >
                                   <div onClick={() => {
                                       setSelectedCat("woman")
                                       if (selectedCat === "woman") {
                                           handleCategoryClick()
                                       }
                                   }}>
                                       <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/banner-16.jpg" alt="" />
                                       <button className="btn btn-shop">{t[aLang].forWoman}</button>
                                       <div className="overlay"></div>
                                   </div>
                               </div>
                               <div className="smallCat">
                                   <div onClick={() => {
                                       setSelectedSubCat("bag")
                                       if (selectedSubCat === "bag") {
                                           handleCategoryClick()
                                       }
                                   }}>
                                       <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80" alt="" />
                                       <button className="btn btn-shop">{t[aLang].bagShop}</button>
                                       <div className="overlay"></div>
                                   </div>
                               </div>
                           </div>
                           <div className="catItem">
                               <div className="bigCat">
                                   <div onClick={() => {
                                       setSelectedCat("kids")
                                       if (selectedCat === "kids") {
                                           handleCategoryClick()
                                       }
                                   }}>
                                       <img src="http://themes.g5plus.net/april/wp-content/uploads/revslider/slider%2003/slider-14.png" alt="" />
                                       <button className="btn btn-shop">{t[aLang].forKid}</button>
                                       <div className="overlay"></div>
                                   </div>
                               </div>
                               <div className="smallCat" style={{ border: "1px solid #D5D4D2" }}>
                                   <div onClick={() => {
                                       setSelectedCat("")
                                       if (selectedCat === "") {
                                           handleCategoryClick()
                                       }
                                   }}>
                                       <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/banner_17.jpg" alt="" />
                                       <span>{t[aLang].shopNow}</span>
                                       <div className="overlay"></div>
                                   </div>
                               </div>
                           </div>
                           <div className="catItem">
                               <div className="bigCat">
                                   <div onClick={() => {
                                       setSelectedCat("men")
                                       if (selectedCat === "men") {
                                           handleCategoryClick()
                                       }
                                   }}>
                                       <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/banner_18.jpg" alt="" />
                                       <button className="btn btn-shop">{t[aLang].forMan}</button>
                                       <div className="overlay"></div>
                                   </div>
                               </div>
                               <div className="smallCat">
                                   <div onClick={() => {
                                       setSelectedCat("")
                                       setSelectedSubCat("shoes")
                                       if (selectedSubCat === "shoes" && selectedCat === "") {
                                           handleCategoryClick()
                                       }
                                   }}>
                                       <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                       <button className="btn btn-shop">{t[aLang].shoesShop}</button>
                                       <div className="overlay"></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

               </section>



               {/* Highlighted products*/}
               <section id='highlighted_products'>
                   <div className="container">
                       <ul className='filter_butttons' data-aos="zoom-down">
                           <li onClick={() => handleFilterChange('all')}>{t[aLang].all}</li>
                           <li onClick={() => handleFilterChange('popular')}>{t[aLang].popular}</li>
                           <li onClick={() => handleFilterChange('brand')}>{t[aLang].brand}</li>
                           <li onClick={() => handleFilterChange('sale')}>{t[aLang].sale}</li>
                       </ul>
                       <ul className='highlighted_products' >
                           {filteredProducts?.filter((a, b) => {
                               if (b < 8 && a.status) {
                                   return a
                               }
                           }).map(product => {
                               const check = basket.find((t) => t.id === product.id);
                               const checkFav = favorite.find((t) => t.id === product.id);
                               return (

                                   <li key={product.id} data-aos="fade-zoom-in"
                                       data-aos-duration="700" >

                                       {product.sale ? <div className="product__sale">{product.sale} %</div> : <div ></div>}
                                       <motion.section initial={{ opacity: 0, transform: "scale(0.9)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.4, property: "transform" }}>
                                           <Link to={`/single/${product.id}`} >
                                               <img src={product.images[0]} className="h_product_front" alt="" />
                                               <img src={product.images[1]} className="h_product_back" alt="" />
                                           </Link>
                                           <div className='h_product_details'>
                                               <h3>{product[titleTranslate].slice(0, 34)} {product[titleTranslate].length > 37 ? "..." : ""} </h3>
                                               <div>
                                                   <span>{product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price}   {t[aLang].azn}</span>
                                                   {product.sale ? <span className='product__sale__price'>{product.price} {t[aLang].azn}</span> : <div ></div>}
                                               </div>
                                           </div>
                                       </motion.section>
                                       {/* <ul className={!singleuser.name ? "product_icons product_icons_important" : "product_icons"} onClick={(e) => e.stopPropagation()} style={{ display: selectedOverlay.status ? "none" : "block" }}> */}
                                       <ul className={"product_icons"} onClick={(e) => e.stopPropagation()} style={{ display: selectedOverlay.status ? "none" : "block" }}>
                                           <li onClick={() => {
                                               setOpenProductModal(true)
                                               setSelectedProduct(product)
                                           }} ><i className="fa-solid fa-magnifying-glass-plus"></i></li>
                                           {/* {singleuser.name && <> */}
                                           {check ? (
                                               <li onClick={() => removeBasket(product.id)} > <i className="fa-regular fa-square-minus"></i></li>
                                           ) : (
                                               <li onClick={() => setSelectedOverlay({ ...selectedOverlay, id: product.id, status: true })}> <i className="fa-solid fa-cart-plus"></i></li>
                                           )}
                                           {checkFav ? (
                                               <li onClick={() => removeFavorite(product.id)}>  <i className="fa-solid fa-heart-circle-check"></i></li>
                                           ) : (
                                               <li onClick={() => addFavorite(product.id)} >   <i className="fa-regular fa-heart"></i></li>
                                           )}
                                           {/* </>} */}
                                       </ul>
                                       {selectedOverlay.status && selectedOverlay.id === product.id && (
                                           <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                                               <div className='product__overlay'>
                                                   <ul className='shop__colors'>
                                                       {product.colors.map((color) =>
                                                           <li key={nanoid} onClick={() => {
                                                               setSelectedColor(color)
                                                               handleClick()
                                                           }}>
                                                               <input readOnly className={selectedColor === color ? "select-color" : ""} name={"color"} value={color} style={{ backgroundColor: color }} />
                                                           </li>
                                                       )}

                                                   </ul>
                                                   <ul>
                                                       {product.size.map((size) =>
                                                           <li key={nanoid} onClick={() => {
                                                               setSelectedSize(size)
                                                               handleClick()
                                                           }} className={selectedSize === size ? "select-color" : ""} >
                                                               <label readOnly name={"size"} value={size}  >{size}</label>
                                                           </li>
                                                       )}
                                                   </ul>
                                                   <div className='single_to_cart' style={{ flexDirection: "column", alignItems: "center", margin: "24px 0" }}>
                                                       <div className="single__count">
                                                           <button onClick={() => singleCount > 1 && setSingleCount(singleCount - 1)}><i className="fa-solid fa-minus"></i></button>
                                                           <input type="text" value={singleCount} readOnly />
                                                           <button onClick={() => setSingleCount(singleCount + 1)}><i className="fa-solid fa-plus"></i></button>
                                                       </div>
                                                       <button className={btnDis ? "dis view-cart" : "view-cart"} onClick={() => {

                                                           addBasket(product.id, singleCount)
                                                           setSelectedOverlay({ id: 0, status: false })
                                                           setSingleCount(1)
                                                       }
                                                       }>{t[aLang].addBasket}</button>
                                                   </div>
                                                   <div onClick={() => {
                                                       setSingleCount(1)
                                                       setSelectedOverlay({ id: 0, status: false })
                                                   }} className="product__overlay__x">X</div>
                                               </div>
                                           </motion.section>)
                                       }
                                   </li>

                               )
                           }
                           )}
                       </ul>
                   </div>
               </section>
               {openProductModal && <ProductModal setOpenProductModal={setOpenProductModal} product={selectedProduct} />}

               {/* Sale Banner */}
               <div className="container__full">
                   <section id="sale__banner">
                       <div onClick={handleSaleClick}>
                           <img src="https://png.pngtree.com/background/20210709/original/pngtree-clothing-sales-geometric-white-background-picture-image_914268.jpg" alt="" />
                           <div className="sale__banner__details">
                               <h3>{aLang === "az" ? "EndİRİM" : t[aLang].sale}</h3>
                               <span>{t[aLang].msale}</span>
                           </div>
                       </div>
                   </section>
               </div>


               {/* Blog */}
               <section id='blog'>
                   <div className="container">
                       <div className="heading">{t[aLang].blogs}</div>
                       <div className="blogs">
                           <Swiper
                               spaceBetween={50}
                               autoplay={{
                                   delay: 2500,
                               }}
                               speed={2500}
                               loop={true}
                               modules={[Autoplay]}
                               breakpoints={{
                                   200: {
                                       slidesPerView: 1,

                                   },
                                   768: {
                                       slidesPerView: 2,

                                   },
                                   992: {
                                       slidesPerView: 3,
                                   }
                               }}>
                               {blogs.map(blog =>
                                   <SwiperSlide key={blog.id}>
                                       <div className="blog">
                                           <div className="blog__img">
                                               <img src={blog.image} alt="" />
                                           </div>
                                           <div className="blog__desc">
                                               {/* <span>WOMAN</span> */}
                                               <Link to={`/blog/${blog.id}`}>{blog["content_" + aLang][0][0]}</Link>
                                               <Link to={`/blog/${blog.id}`}>{t[aLang].readMore}</Link>
                                           </div>
                                       </div>
                                   </SwiperSlide>
                               )}

                           </Swiper>
                       </div>
                       <div className='blog__bottom'>
                           <Link to={"/blogs"} className='showAllBlogs'>{t[aLang].showAllBlogs}</Link>
                       </div>
                   </div>
               </section>




               {/* Instagram */}
               <div className="container__full">
                   <section id="instagram">
                       <div className="heading">{t[aLang].instagramGallery}</div>
                       <ul className="posts">
                           <Swiper
                               spaceBetween={0}
                               // slidesPerView={5}
                               breakpoints={{
                                   200: {
                                       slidesPerView: 3,

                                   },
                                   768: {
                                       slidesPerView: 4,

                                   },
                                   992: {
                                       slidesPerView: 5,
                                   }
                               }}>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/1_d6cce640-4c72-42c3-9060-4290d8e85972.jpg?v=1640579576" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/3_36007b4b-a3f2-440d-9990-3f8647cf1724.jpg?v=1640579616" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/4_c909ee0f-da5f-4e61-b032-1045b3fe0a49.jpg?v=1640579628" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/5_9817980f-67d6-4b1f-bea4-3392899f50e0.jpg?v=1640579642" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/1_d6cce640-4c72-42c3-9060-4290d8e85972.jpg?v=1640579576" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/3_36007b4b-a3f2-440d-9990-3f8647cf1724.jpg?v=1640579616" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <a href="https://instagram.com/modamood2023?igshid=YmMyMTA2M2Y=" target={"_blank"}>
                                       <li>
                                           <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/4_c909ee0f-da5f-4e61-b032-1045b3fe0a49.jpg?v=1640579628" alt="" />
                                           <div className="overlay-post"><i className="fa-brands fa-instagram"></i></div>
                                       </li>
                                   </a>
                               </SwiperSlide>
                           </Swiper>
                       </ul>
                   </section>

               </div>



           </motion.section>
         
        </>
    )
}
const t = (a) => a;
export default connect(t)(Home)