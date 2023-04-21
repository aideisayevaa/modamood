import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { connect } from 'react-redux';
import { Navigation, Pagination } from 'swiper';
import { nanoid } from "nanoid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Thumbs } from "swiper";
import { Link } from 'react-router-dom';
function ProductModal({ categories, subcategories, setOpenProductModal, product, aLang, t, basket, dispatch }) {
    const findCat = categories.find((a) => a.id === product.category_id).name
    const findSubCat = subcategories.find((a) => a.id === product.subcategory_id).name
    let titleTranslate = "title_" + aLang
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [singleCount, setSingleCount] = useState(1)

    const addBasket = (id, singleCount) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket, { id: id, count: singleCount, size: "M" }],
        });
    };
    return (
        <div id="modal_container">
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
                                    // loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {product.images?.map(img =>
                                        <SwiperSlide key={nanoid}> <img key={img} src={img} alt="" /></SwiperSlide>
                                    )}

                                </Swiper>


                            </div>
                        </div>
                        <div className="single_right">
                            <div onClick={() => setOpenProductModal(false)} className='close_basket'><button>X</button></div>
                            <h4>{product[titleTranslate]}</h4>
                            <h5>{t[aLang].price} : {product.price}   {t[aLang].azn}</h5>
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
                                        <ul className='single_color'>
                                            {product.colors.map((color) =>
                                                <li key={nanoid} style={{ backgroundColor: color }}></li>
                                            )}

                                        </ul>
                                    </div>
                                    <div className='single_right_element single_size_element'>
                                        {t[aLang].size} :
                                        <ul>
                                            {product.size.map((size) =>
                                                <li key={nanoid}>{size}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='single_to_cart'>
                           <Link to={`/single/${product.id}`}>     <button className='view-cart'>{t[aLang].desc}</button></Link>
                            </div>
                            {/* <div className='single_to_cart'>
                                <div className="single__count">
                                    <button onClick={() => singleCount > 1 && setSingleCount(singleCount - 1)}><i className="fa-solid fa-minus"></i></button>
                                    <input type="text" value={singleCount} readOnly />
                                    <button onClick={() => setSingleCount(singleCount + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
                                <button onClick={() => addBasket(product.id, singleCount)} className='view-cart'>{t[aLang].addBasket}</button>
                            </div> */}
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}
const t = (a) => a
export default connect(t)(ProductModal)