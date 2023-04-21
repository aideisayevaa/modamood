import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { connect } from "react-redux";
import 'swiper/css/autoplay';
import { Autoplay, EffectFade } from "swiper";
import { motion } from "framer-motion";
import Faqs from "../components/Faqs";

function About({ aLang, t }) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="pt_80"></div>
                <Banner
                    bannerBg="http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-02.jpg?id=2337"
                    pageName="About Us"
                />

                <div className="container__full">
                    <section id="about">
                        <div className="container">
                            <div className="about-img" data-aos="fade-right">
                                <img
                                    src="http://themes.g5plus.net/april/wp-content/uploads/2017/08/background-05.jpg?id=2043"
                                    alt=""
                                />
                            </div>
                            <div className="about-text" data-aos="fade-left">
                                <h2>{t[aLang].aboutTitle}</h2>
                                <p>{t[aLang].aboutDesc} </p>
                            </div>
                        </div>
                    </section>
                </div>
         
                <div className="container__full">
                    <section id="services">
                        <ul>
                            <li>
                                <span style={{ color: "#F76B6A" }}>
                                    <i className="fa-solid fa-gifts"></i>
                                </span>
                                <h5>{t[aLang].freeShipping}</h5>
                                <p>{t[aLang].freeShippingDesc}</p>
                            </li>
                            <li>
                                <span style={{ color: "#80D1DC" }}>
                                    <i className="fa-solid fa-headset"></i>
                                </span>
                                <h5>{t[aLang].supportCustomer}</h5>
                                <p>{t[aLang].supportCustomerDesc}</p>
                            </li>
                            <li>
                                <span style={{ color: "#8B8BD4" }}>
                                    <i className="fa-solid fa-shield-halved"></i>
                                </span>
                                <h5>{t[aLang].securePayments}</h5>
                                <p>{t[aLang].securePaymentsDesc}</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <Faqs />
                <section id="testimonials">
                    <div className="container">
                        <ul className="testimonials">
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
                                }}
                            >
                                <SwiperSlide>
                                    <li>
                                        <div className="t-back">#01</div>
                                        <p>{t[aLang].testimonial1}</p>
                                        <div className="author">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                                alt=""
                                            />
                                            <div>
                                                <h6>{t[aLang].testimonialUser1}</h6>
                                                <span> {t[aLang].testimonialUserStatus}</span>
                                            </div>
                                        </div>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <div className="t-back">#02</div>
                                        <p>{t[aLang].testimonial2}</p>
                                        <div className="author">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                                alt=""
                                            />
                                            <div>
                                                <h6>{t[aLang].testimonialUser2}</h6>
                                                <span> {t[aLang].testimonialUserStatus}</span>
                                            </div>
                                        </div>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <div className="t-back">#03</div>
                                        <p>{t[aLang].testimonial3} </p>
                                        <div className="author">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                                alt=""
                                            />
                                            <div>
                                                <h6>{t[aLang].testimonialUser3}</h6>
                                                <span> {t[aLang].testimonialUserStatus}</span>
                                            </div>
                                        </div>
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <div className="t-back">#04</div>
                                        <p>{t[aLang].testimonial4}</p>
                                        <div className="author">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                                alt=""
                                            />
                                            <div>
                                                <h6>{t[aLang].testimonialUser4}</h6>
                                                <span> {t[aLang].testimonialUserStatus}</span>
                                            </div>
                                        </div>
                                    </li>
                                </SwiperSlide>

                            </Swiper>
                        </ul>
                    </div>
                </section>


                {/* Brends */}
                <section id="brends">
                    <div className="container">
                        <ul>
                            <Swiper

                                breakpoints={{
                                    100: {
                                        slidesPerView: 3,
                                        spaceBetween: 20
                                    },
                                    350: {
                                        slidesPerView: 4,
                                        spaceBetween: 40
                                    },
                                    600: {
                                        slidesPerView: 5,
                                        spaceBetween: 50
                                    },
                                    // 500: {
                                    //     slidesPerView: 4,
                                    // },
                                    // 800: {
                                    //     slidesPerView: 5,

                                    // },
                                    1024: {
                                        slidesPerView: 6,
                                    }
                                }}
                            >
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_01.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_02.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_03.jpg" alt="" />
                                    </li>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_04.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_05.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_06.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_01.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_02.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <li>
                                        <img src="https://themes.g5plus.net/april/wp-content/uploads/2017/08/partner_03.jpg" alt="" />
                                    </li>
                                </SwiperSlide>
                            </Swiper>



                        </ul>
                    </div>
                </section>
            </motion.section>
        </>
    );
}
const t = (a) => a;
export default connect(t)(About);