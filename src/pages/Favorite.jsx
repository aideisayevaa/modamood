import { connect } from "react-redux";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { motion, transform } from "framer-motion";
import { useState } from "react";
import { nanoid } from "nanoid";
import ProductModal from "../components/ProductModal";

import Swal from 'sweetalert2'
function Favorite({ products, favorite, dispatch, basket, aLang, t, singleuser }) {

    // const removeFavorite = (id) => {
    //     dispatch({
    //         type: "SET_FAVORITE",
    //         payload: [...favorite.filter((t) => t.id !== id)],
    //     });
    // };
    const [selectedProduct, setSelectedProduct] = useState({})
    const [openProductModal, setOpenProductModal] = useState(false)
    const [singleCount, setSingleCount] = useState(1)
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
        Swal.fire({
            title:t[aLang].swalQues,
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
                    title:  t[aLang].swalNotRemove,
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
        Swal.fire({
            title: t[aLang].swalFavoriteRemove,
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
                    type: "SET_FAVORITE",
                    payload: [...favorite.filter((t) => t.id !== id)],
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
                    // text: "....",
                    icon: "warning",
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        });

    };
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedOverlay, setSelectedOverlay] = useState({
        id: 0,
        status: false
    })
    let titleTranslate = "title_" + aLang
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="pt_80"></div>
                <Banner pageName={"Favorite"} bannerBg={"http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-01.jpg?id=2336"} />
                <div className="container">




                    <section id="favorites">
                        <div className="heading">{t[aLang].favorites}</div>

                        <ul className='highlighted_products'>
                            {favorite.length ? (favorite.map(a => {
                                const product = products.find((t) => t.id === a.id);
                                const check = basket.find((t) => t.id === product?.id);
                                const checkFav = favorite.find((t) => t.id === product?.id);
                                return (
                                    <li key={product?.id} >
                                        {product?.sale ? <div className="product__sale">{product?.sale} %</div> : <div ></div>}
                                        <motion.section initial={{ opacity: 0, transform: "scale(0.9)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.4, property: "transform" }}>
                                            <Link to={`/single/${product?.id}`} >
                                                <img src={product?.images[0]} className="h_product_front" alt="" />
                                                <img src={product?.images[1]} className="h_product_back" alt="" />
                                            </Link>
                                            <div className='h_product_details'>
                                                <h3>{product && product[titleTranslate].slice(0, 34)} {product && product[titleTranslate].length > 34 ? "..." : ""} </h3>
                                                <div>
                                                    <span>{product?.sale ? (product?.price - (product?.price * product?.sale / 100)).toFixed(2) : product?.price}   {t[aLang].azn}</span>
                                                    {product?.sale ? <span className='product__sale__price'>{product?.price} {t[aLang].azn}</span> : <div ></div>}
                                                </div>
                                            </div>
                                        </motion.section>
                                        <ul className={"product_icons"} onClick={(e) => e.stopPropagation()} style={{ display: selectedOverlay.status ? "none" : "block" }}>
                                            <li onClick={() => {
                                                setOpenProductModal(true)
                                                setSelectedProduct(product)
                                            }}><i className="fa-solid fa-magnifying-glass-plus"></i></li>
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
                            )
                            ) : (
                                <h1 className="notProduct">{t[aLang].productNotAdded}</h1>
                            )}
                        </ul>

                    </section>
                    {openProductModal && <ProductModal setOpenProductModal={setOpenProductModal} product={selectedProduct} />}
                </div>
            </motion.section>
        </>
    );
}
const t = (a) => a;
export default connect(t)(Favorite);
