import React from 'react'
import { Link } from "react-router-dom";

function Product({ product, aLang, t }) {
    let titleTranslate = "title_" + aLang
    return (
        <Link to={`/single`} >
            <li  >

                <img src={product.images[0]} className="h_product_front" alt="" />
                <img src={product.images[1]} className="h_product_back" alt="" />
                <div className='h_product_details'>
                    <h3>{product[titleTranslate]}</h3>
                    <span>{product.price}   {t[aLang].azn}</span>
                </div>

                <ul className='product_icons' onClick={(e) => e.stopPropagation()}>
                    <li><i className="fa-solid fa-magnifying-glass-plus"></i></li>
                    <li><i className="fa-solid fa-basket-shopping"></i></li>
                    <li><i className="fa-regular fa-heart"></i></li>
                </ul>
            </li>
        </Link>
    )
}

export default Product