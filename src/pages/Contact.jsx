import React, { useState } from 'react'
import { connect } from 'react-redux'
import Banner from '../components/Banner'
import { motion } from "framer-motion";
import Swal from 'sweetalert2'
function Contact({ t, aLang, singleuser, messages, dispatch }) {
    const [btnDis, setBtnDis] = useState(true)
    const [message, setMessage] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        text: ""
    })
    const handleContactMessage = (e) => {
        e.preventDefault();
        Swal.fire({
            title: t[aLang].swalMessagesend,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: t[aLang].no,
            confirmButtonText: t[aLang].yes,
        }).then((result) => {
            if (result.isConfirmed) {
                messages.push(message)
                dispatch({
                    type: "SET_MESSAGES",
                    payload: messages,
                });
                setMessage({
                    name: "",
                    surname: "",
                    email: "",
                    phone: "",
                    text: ""
                })
                Swal.fire({
                    title: t[aLang].swalMessagesendYes,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
                setBtnDis(true)
            } else {
                Swal.fire({
                    title: t[aLang].swalMessagesendNo,
                    text: "....",
                    icon: "warning",
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        });
    }
    const handleText = (e) => {
        if (message.name === "" || message.surname === "" || message.email === ""
            || message.phone === "" || message.text === "") {
            setBtnDis(true)
        }
        else {
            setBtnDis(false)
        }
        setMessage({ ...message, [e.target.name]: e.target.value })
    }
    // console.log(singleuser)
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="pt_80"></div>
                {/* Banner Contact */}
                <Banner
                    bannerBg="http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-03.jpg?id=2370"
                    pageName="Contact"
                />


                {/* Form */}
                <section id="form">
                    <div className="container">
                        <form>
                            <legend>{t[aLang].sendUsMesssage}</legend>
                            <div>
                                <input value={message.name} onChange={handleText} name="name" type="text" placeholder={t[aLang].name} />
                                <input value={message.surname} onChange={handleText} name="surname" type="text" placeholder={t[aLang].surname} />
                            </div>
                            <div>
                                <input value={message.email} onChange={handleText} name="email" type="email" placeholder={t[aLang].email} />
                                <input value={message.phone} onChange={handleText} name="phone" type="number" placeholder={t[aLang].phone} />
                            </div>
                            <textarea value={message.text} onChange={handleText} name="text" placeholder={t[aLang].message}></textarea>
                            <button disabled={btnDis} type='submit' onClick={handleContactMessage} className={btnDis ? "dis btn" : "btn"}>{t[aLang].submit}</button>
                        </form>
                    </div>
                </section>

                {/* Contact Info */}
                <section id="info">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3355363219653!2d49.83735515089747!3d40.37925547926821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da3f0aa8b99%3A0xfbd87f4c8d962105!2s25%20Samad%20Vurgun%2C%20Baku!5e0!3m2!1str!2saz!4v1680024520486!5m2!1str!2saz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="info">
                        <ul>
                            <li><span><i className="fa-solid fa-map-location-dot"></i></span>
                                <div>
                                    <h6>{t[aLang].address}</h6>
                                    <p> {t[aLang].locationStore}</p>
                                </div>
                            </li>
                            <li><span><i className="fa-solid fa-phone-volume"></i></span>
                                <div>
                                    <h6>{t[aLang].phone}</h6>
                                    <p>  +994 55 123 45 67</p>
                                </div>
                            </li>
                            <li><span><i className="fa-solid fa-envelope-open-text"></i></span>
                                <div>
                                    <h6>{t[aLang].email}</h6>
                                    <p> modamood@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </motion.section>
        </>
    )
}
const t = a => a
export default connect(t)(Contact)