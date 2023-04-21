import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { motion, transform } from "framer-motion";

function PaymentInfo({ basket, products, t, aLang }) {
    const nav = useNavigate();
    let titleTranslate = "title_" + aLang
    const total = basket.reduce((acc, item) => {
        let product = products.find((a) => a.id === item.id);
        return acc + (product?.sale ? (product?.price - (product?.price * product?.sale / 100)).toFixed(2) : product?.price) * item.count;
    }, 0);
    const [paymentInfo, setPaymentInfo] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        address: "",
        city: ""
    })
    const handlePaymentInfo = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value })
        console.log(paymentInfo)
    }
    const handleSubmitPaymentInfo = (e) => {
        e.preventDefault()
        if (paymentInfo.name === "" || paymentInfo.surname === ""
            || paymentInfo.phone === "" || paymentInfo.email === "" || paymentInfo.address === ""
            || paymentInfo.city === "") {
            Swal.fire({
                title: "Bütün məlumatlar daxil edilməlidir.",
                icon: "warning",
                timer: 1500,
                showConfirmButton: false,
            });
        }
        else {
            nav("/payment")
        }
    }
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="pt_80"></div>
                <div className="container__full">
                    <section id='payment'>
                        <div className="payment__info" id='form'>
                            <ul>
                                <li className='active__progress'>1</li>
                                <li></li>
                                <li>2</li>
                            </ul>
                            <form>
                                <legend>{t[aLang].contactInformation}</legend>
                                <div>
                                    <input name='name' value={paymentInfo.name} onChange={handlePaymentInfo} type="text" placeholder={t[aLang].name} />
                                    <input name='surname' value={paymentInfo.surname} onChange={handlePaymentInfo} type="text" placeholder={t[aLang].surname} />
                                </div>
                                <input name='email' value={paymentInfo.email} onChange={handlePaymentInfo} type="email" placeholder={t[aLang].email} />
                                <input name='phone' value={paymentInfo.phone} onChange={handlePaymentInfo} type="number" placeholder={t[aLang].phone} />
                                <input name='address' value={paymentInfo.address} onChange={handlePaymentInfo} type="text" placeholder={t[aLang].address} />
                                <input name='city' value={paymentInfo.city} onChange={handlePaymentInfo} type="text" placeholder={t[aLang].city} />
                                <button onClick={handleSubmitPaymentInfo} type='submit' className='filter__clean'>{t[aLang].confirmInformation}</button>
                            </form>
                        </div>
                        <div className="payment__products">
                            <ul>

                                {basket.map(a => {
                                    const findProduct = products.find(p => p.id === a.id)
                                    return <li key={findProduct?.id}>
                                        <img src={findProduct?.images[0]} alt="" />
                                        <div>
                                            <h5>{findProduct && findProduct[titleTranslate]}</h5>
                                            <span>{a.count} x {findProduct.sale ? (findProduct.price - (findProduct.price * findProduct.sale / 100)).toFixed(2) : findProduct.price}    {t[aLang].azn}</span>
                                        </div>
                                    </li>
                                })}
                            </ul>
                            <div className="basket-bottom">
                                <span>{t[aLang].total} :  {total}   {t[aLang].azn}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </motion.section>
        </>
    )
}
const t = a => a
export default connect(t)(PaymentInfo)