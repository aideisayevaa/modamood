import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from "react-router-dom";
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import { connect } from 'react-redux';
import { nanoid } from "nanoid";
import ProductModal from '../components/ProductModal';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { motion, transform } from "framer-motion";
// import "./styles.css";

// import required modules
import { FreeMode, Thumbs } from "swiper";

function SinglePage({ categories, subcategories, aLang, t, dispatch, basket, favorite, singleuser }) {
    const [products, setProducts] = useState([])
    const [selectedOption, setSelectedOption] = useState("1")
    useEffect(() => {
        const getInfo = async () => {
            let info = await fetch("http://localhost:2407/products").then((a) =>
                a.json()
            );
            setProducts(info);
        };
        getInfo();
    }, []);
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const [userComment, setUserComment] = useState({
        name_surname: "",
        rating: "4.5",
        comment: ""
    });
    const [loading, setLoading] = useState(true)
    const [singleCount, setSingleCount] = useState(1)
    const [openProductModal, setOpenProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    // console.log("0101001001001: " + singleuser.name)
    useEffect(() => {
        fetch(`http://localhost:2407/products/${id}`).then((a) =>
            a.json().then((a) => {
                setProduct(a)
                setLoading(false)
            }
            ))

        // setProduct(products.find((a) => a.id === id))

    }, [id]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let titleTranslate = "title_" + aLang

    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [btnDis, setBtnDis] = useState(true)
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
        dispatch({
            type: "SET_BASKET",
            payload: [...basket.filter((t) => t.id !== id)],
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

    // console.log("singledeki products : " + products)
    const handleComment = (e) => {
        e.preventDefault();
        setUserComment({ ...userComment, name_surname: singleuser.name })

        product.comments.push(userComment)
        setProduct({ ...product })

        console.log("Product : " + product.name + " " + product.comments.map(a => a))
        fetch(`http://localhost:2407/products/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        setUserComment({
            name_surname: "",
            rating: "4.5",
            comment: ""
        })
    }
    console.log("size: " + selectedSize + " | color : " + selectedColor)
    const [selectedOverlay, setSelectedOverlay] = useState({
        id: 0,
        status: false
    })

    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                {loading ? <>
                    <div className="loading"><div></div></div>
                </> : <>
                    <div className="pt_80"></div>
                    <section id="single_product">
                        <div className="container">
                            <div className="single_product">
                                <div className="single_left"    >
                                    <div className="single_img">
                                        <Swiper
                                            style={{
                                                "--swiper-navigation-color": "#fff",
                                                "--swiper-pagination-color": "#fff",
                                            }}
                                            loop={true}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >
                                            {product.images?.map(img =>
                                                <SwiperSlide key={nanoid}> <img key={img} src={img} alt="" /></SwiperSlide>
                                            )}
                                        </Swiper>
                                    </div>
                                    <div className="single_sub_img">
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper">
                                            {product.images?.map(img =>
                                                <SwiperSlide key={nanoid}> <img key={img} src={img} alt="" /></SwiperSlide>
                                            )}

                                        </Swiper>


                                    </div>
                                </div>
                                <div className="single_right">
                                    <h4>{product[titleTranslate]}</h4>
                                    <h5>Price: {product.price}   {t[aLang].azn}</h5>
                                    <div>
                                        <div>

                                            <ul className='single_status'>
                                                <li><b>{t[aLang].availability} :</b><span>{product.stock ? t[aLang].inStock : t[aLang].notStock}</span></li>
                                                <li><b>{t[aLang].category} :</b> <span>{categories.find((a) => a.id === product.category_id)?.name}</span></li>
                                                <li><b>{t[aLang].subcategory} : </b> <span>{subcategories.find((a) => a.id === product.subcategory_id)?.name}</span></li>
                                            </ul>
                                            <div className='single_right_element'>{t[aLang].share}:
                                                <ul className='single_socials'>
                                                    <li><i className="fa-brands fa-facebook-f"></i></li>
                                                    <li><i className="fa-brands fa-instagram"></i></li>
                                                    <li><i className="fa-brands fa-twitter"></i></li>
                                                    <li><i className="fa-brands fa-google"></i></li>
                                                    <li><i className="fa-brands fa-pinterest"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className='single_right_element single_color_element'>{t[aLang].color} :
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
                                            </div>
                                            <div className='single_right_element single_size_element'>
                                                {t[aLang].size} :
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single_to_cart'>
                                        <div className="single__count">
                                            <button onClick={() => singleCount > 1 && setSingleCount(singleCount - 1)}><i className="fa-solid fa-minus"></i></button>
                                            <input type="text" value={singleCount} readOnly />
                                            <button onClick={() => setSingleCount(singleCount + 1)}><i className="fa-solid fa-plus"></i></button>
                                        </div>
                                        <button className={btnDis ? "dis view-cart" : "view-cart"} onClick={() => addBasket(product.id, singleCount)}>{t[aLang].addBasket}</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                    <div className="container">


                        <div className="product__comments">
                            <div className='product__comments__header'>
                                <h3 onClick={() => setSelectedOption("1")} className={selectedOption === "1" && 'selected__head'}>{t[aLang].comments}</h3>
                                <h3 onClick={() => setSelectedOption("2")} className={selectedOption === "2" && 'selected__head'}>{t[aLang].desc}</h3>
                            </div>
                            <div className='single_line'></div>
                            <ul className="comments__area">
                                {selectedOption === "1" ? (
                                    < >
                                        {/* <li className='comments__area__first' key={nanoid}>{t[aLang].rating} : <span> 4.5 </span>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li> */}
                                        {product.comments.map((c) => (<>
                                            <li id={nanoid()}>
                                                <div className="comment">
                                                    {c.name_surname}
                                                </div>
                                                {/* <div className='comment__info'>
                                                    <div className="comment__star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div> */}
                                                <div className="comment">
                                                    {c.comment}
                                                </div>
                                            </li></>
                                        ))}
                                        {singleuser.name && <li className='product__message'>
                                            <form>
                                                <input value={userComment.comment} onChange={(e) => setUserComment({ ...userComment, comment: e.target.value, name_surname: singleuser.name })} type="text" placeholder={t[aLang].writeYourComment} />
                                                <button type='submit' onClick={handleComment}><i class="fa-regular fa-paper-plane"></i></button>
                                            </form>
                                        </li>}
                                    </>
                                ) : (<>
                                <li>{t[aLang].desc1}</li>
                                <li>{t[aLang].desc2}</li>
                                <li>{t[aLang].desc3}</li>
                                </>)}

                            </ul>
                        </div>

                        <div className="product-desc">
                            <h3>{t[aLang].similarProducts}</h3>
                            <div className='single_line'></div>
                            <ul className='highlighted_products'>
                                <Swiper
                                    loop={true}

                                    className="mySwiper3"
                                    breakpoints={{
                                        200: {
                                            slidesPerView: 2,
                                            // spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            // spaceBetween: 30
                                        },
                                        992: {
                                            slidesPerView: 4,
                                            // spaceBetween: 40
                                        }
                                    }}

                                >
                                    {products.filter((a) => a.subcategory_id === product.subcategory_id).map(p => {
                                        const check = basket.find((t) => t.id === p.id);
                                        const checkFav = favorite.find((t) => t.id === p.id);
                                        return (

                                            <SwiperSlide key={p.id}><li >
                                                {p.sale ? <div className="product__sale">{p.sale} %</div> : <div ></div>}
                                                <motion.section initial={{ opacity: 0, transform: "scale(0.9)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.4, property: "transform" }}>
                                                    <Link to={`/single/${p.id}`} >
                                                        <img src={p.images[0]} className="h_product_front" alt="" />
                                                        <img src={p.images[1]} className="h_product_back" alt="" />
                                                    </Link>
                                                    <div className='h_product_details'>
                                                        <h3>{p[titleTranslate].slice(0, 34)} {p[titleTranslate].length > 37 ? "..." : ""} </h3>
                                                        <div>
                                                            <span>{p.sale ? (p.price - (p.price * p.sale / 100)).toFixed(2) : p.price}   {t[aLang].azn}</span>
                                                            {p.sale ? <span className='product__sale__price'>{p.price} {t[aLang].azn}</span> : <div ></div>}
                                                        </div>
                                                    </div>
                                                </motion.section>
                                                <ul className={"product_icons"} onClick={(e) => e.stopPropagation()} style={{ display: selectedOverlay.status ? "none" : "block" }}>
                                                    <li onClick={() => {
                                                        setOpenProductModal(true)
                                                        setSelectedProduct(p)
                                                    }}><i className="fa-solid fa-magnifying-glass-plus"></i></li>
                                                        {check ? (
                                                            <li onClick={() => removeBasket(p.id)} > <i className="fa-regular fa-square-minus"></i></li>
                                                        ) : (
                                                            <li onClick={() => setSelectedOverlay({ ...selectedOverlay, id: p.id, status: true })}> <i className="fa-solid fa-cart-plus"></i></li>
                                                        )}
                                                        {checkFav ? (
                                                            <li onClick={() => removeFavorite(p.id)}>  <i className="fa-solid fa-heart-circle-check"></i></li>
                                                        ) : (
                                                            <li onClick={() => addFavorite(p.id)} >   <i className="fa-regular fa-heart"></i></li>
                                                        )}
                                                </ul>
                                                {selectedOverlay.status && selectedOverlay.id === p.id && (
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
                                            </SwiperSlide>

                                        )
                                    }
                                    )}

                                </Swiper>

                            </ul>
                        </div>

                    </div>

                    {openProductModal && <ProductModal setOpenProductModal={setOpenProductModal} product={selectedProduct} />}
                </>
                }
            </motion.section>
        </>

    );
}
const t = (a) => a
export default connect(t)(SinglePage)