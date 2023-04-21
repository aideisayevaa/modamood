import React, { useState } from 'react'
import Banner from '../components/Banner'
import { motion, transform } from "framer-motion";
import { connect } from 'react-redux';

function Faqs({ aLang, t }) {
    const [faqs, setFaqs] = useState([
        {
            question: {
                en: "How long does it take for products to be delivered?",
                az: "Məhsullar nə qədər vaxt ərzində çatdırılır?",
                ru: "Сколько времени занимает доставка продукции?"
            },
            answer: {
                en: "Products are usually delivered to the specified address within 2-5 working days.",
                az: "Məhsullar adətən 2-5 iş günü ərzində qeyd olunan ünvana çatdırılır.",
                ru: "Продукция обычно доставляется по указанному адресу в течение 2-5 рабочих дней."
            },
            isOpen: false
        },
        {
            question: {
                en: "Where is the store located?",
                az: "Mağaza harada yerləşir?",
                ru: "Где находится магазин?"
            },
            answer: {
                en: "Our store is located at Samad Vurgun 25 on 28 May.",
                az: "Mağazamız 28 mayda Səməd Vurğun 25 ünvanında yerləşir.",
                ru: "Наш магазин находится по адресу Самеда Вургуна 25 28 мая."
            },
            isOpen: false
        },
        {
            question: {
                en: "What are your store hours?",
                az: "Mağazanızın iş saatları hansı aralıqdadır?",
                ru: "Часы работы вашего магазина?"
            },
            answer: {
                en: "Our store is open every day from 10:00 to 21:00.",
                az: "Mağazamız hər gün 10:00 - 21:00 saat aralığında fəaliyyət göstərir.",
                ru: "Наш магазин работает каждый день с 10:00 до 21:00."
            },
            isOpen: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.isOpen = !faq.isOpen;
                } else {
                    faq.isOpen = false;
                }
                return faq;
            })
        );
    };

    return (
        <>
         <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
       
            <div className="container">
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <div key={index} className="single__faq">
                            <div className='faq__question' style={{ borderBottomRightRadius: faq.isOpen && "0px" }} onClick={() => toggleFAQ(index)}> <h4>{faq.question[aLang]}</h4> <i style={{ transform: faq.isOpen && "rotate(45deg)" }} className="fa-solid fa-plus"></i></div>
                            {faq.isOpen && <motion.section initial={{ opacity: 0.5, transform: "translateY(-20px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: 0.4 }}>
                                <div className='faq__answer' >{faq.answer[aLang]}</div>
                            </motion.section>}

                        </div>
                    ))}
                </div>
            </div>
            </motion.section>
        </>
    )
}
const t = a => a
export default connect(t)(Faqs)