import React from 'react'
import { connect } from 'react-redux'
import { motion, transform } from "framer-motion";
import { Link } from 'react-router-dom';

function Payment({ basket, products, t, aLang }) {
    let titleTranslate = "title_" + aLang
    const total = basket.reduce((acc, item) => {
        let product = products.find((a) => a.id === item.id);
        return acc + (product?.sale ? (product?.price - (product?.price * product?.sale / 100)).toFixed(2) : product?.price) * item.count;
    }, 0);
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <div className="pt_80"></div>
            <div className="container__full">
                <section id='payment'>
                    <div className="payment__info" id='form'>
                        <ul>
                            <li>1</li>
                            <li></li>
                            <li className='active__progress'>2</li>
                        </ul>
                        <form>
                            <legend>{t[aLang].cardInfo}</legend>
                            <input type="number" placeholder={t[aLang].cardNumber} />
                            <input type="text" placeholder={t[aLang].cardhilderName} />
                            <div>
                                    <input type="text" placeholder={t[aLang].dateEx}/>
                                    <input type="password" placeholder={t[aLang].securityCode} />
                            </div>
                            <button type='submit' className='filter__clean'>{t[aLang].confirmPay}</button>
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
    )
}
const t = a => a
export default connect(t)(Payment)