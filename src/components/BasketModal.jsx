import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion, transform } from "framer-motion";
import Swal from 'sweetalert2'

function BasketModal({ setOpenBasket, basket, products, dispatch, aLang, t }) {
    const total = basket.reduce((acc, item) => {
        let product = products.find((a) => a.id === item.id);
        return acc + (product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price) * item.count;
    }, 0);

    const removeBasket = (id) => {
      
        Swal.fire({
            title:t[aLang].swalQues,
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
                title:  t[aLang].swalNotRemove,
                title:  t[aLang].swalNotRemove,
                // text: "....",
                icon: "warning",
                timer: 1000,
                showConfirmButton: false,
              });
            }
          });
    };
    let titleTranslate = "title_" + aLang
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    return (
        // <section id="basket">
        <motion.section id="basket" initial={{ opacity: 0, transform: "translateX(100%)" }} animate={{ opacity: 1, transform: "translateX(0%)" }} transition={{ duration: 0.4, property: "transform" }}>
            <div className='close_basket'> <button onClick={() => setOpenBasket(false)}>X</button></div>
            <ul>

                { basket.length? ( basket.map(a => {
                    const findProduct = products.find(p => p.id === a.id)
                    return <li key={findProduct?.id}>
                        <img src={findProduct?.images[0]} alt="" />
                        <div>
                            <h5>{findProduct && findProduct[titleTranslate]}</h5>
                            <span>{a.count} x {findProduct.sale ? (findProduct.price - (findProduct.price * findProduct.sale / 100)).toFixed(2) : findProduct.price}    {t[aLang].azn}</span>

                        </div>
                        <button onClick={(id) => removeBasket(a.id)} className='delete_product_basket'>x</button>
                    </li>
                })):( <h1 className="notProduct">{t[aLang].productNotAdded}</h1>) }
            </ul>
            <div className="basket-bottom">
            { basket.length ?
               ( <span>{t[aLang].total} : {windowSize.current[0] < 320 && <br />}  {total.toFixed(2)}   {t[aLang].azn}</span>):(<></>)}
                <Link to={"/basket"}> <button className='view-cart' onClick={() => setOpenBasket(false)}>{t[aLang].goBasket}</button></Link>
            </div>
        </motion.section>
        // </section>
    )
}
const t = a => a
export default connect(t)(BasketModal)