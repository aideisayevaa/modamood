import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import ProductModal from '../components/ProductModal';
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
function Shop({ products, basket, favorite, dispatch, categories, subcategories, aLang, t, singleuser, selectedCategory, selectedSubCategory }) {
    const [listView, setListView] = useState(false)
    // const [selectedCatShop, setSelectedCatShop] = useState("")
    // const [selectedSubCatShop, setSelectedSubCatShop] = useState("")
    const [openProductModal, setOpenProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [dis, setDis] = useState(false)
    const [btnDis, setBtnDis] = useState(true)
    const [singleCount, setSingleCount] = useState(1)
    let titleTranslate = "title_" + aLang
    const [filterElements, setFilterElements] = useState({
        search: "",
        color: "",
        minPrice: 0,
        maxPrice: 1000,
        size: ""
    })
    const [minMax, setMinMax] = useState({
        minPrice: 0,
        maxPrice: Math.ceil((products.sort((a, b) => b?.price - a?.price))[0]?.price) 
    })
    const nav = useNavigate();
    const [selectedCat, setSelectedCat] = useState("")
    const [selectedSubCat, setSelectedSubCat] = useState("")
    const handleCategoryClick = () => {
        // console.log("handleCategoryClick")
        // console.log("handleClickCat : " + selectedCat)
        dispatch({
            type: "SET_CATEGORY",
            payload: selectedCat,
        });
        dispatch({
            type: "SET_SUBCATEGORY",
            payload: selectedSubCat,
        });
        nav("/shop")

    }

    const filterProducts = (products, filterElements) => {
        const { color, search, minPrice, maxPrice, size } = filterElements;
        if (selectedCategory === "sale") {
            return products.filter(a => a.sale).filter((product) => {

                const colorMatch = color === '' || product.colors.includes(filterElements.color);
                const searchMatch =
                    search === '' ||
                    product[titleTranslate].toLowerCase().includes(search.toLowerCase());
                const priceMatch = minPrice === "" || product.price >= minPrice && product.price <= maxPrice
                const sizeMatch = size === "" || product.size.includes(size)
                let selectedCategoryMatch = ""
                let selectedSubCategoryMatch = ""
                if (selectedCategory === "sale") {
                    selectedCategoryMatch = true
                }
                else if (selectedCategory) {
                    let findId = categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id
                    selectedCategoryMatch = product.category_id == findId
                    // selectedCategoryMatch = (product.category_id == categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id )||
                    // (product.subcategory_id == subcategories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id)
                }
                if (selectedSubCategory) {
                    let findId = subcategories.find(a => a.name.toLowerCase() === selectedSubCategory.toLowerCase()).id
                    selectedSubCategoryMatch = product.subcategory_id == findId
                }
                return colorMatch && searchMatch && priceMatch && sizeMatch && (selectedCategory ? selectedCategoryMatch : true) && (selectedSubCategory ? selectedSubCategoryMatch : true);
            });
        }
        else {
            return products.filter((product) => {

                const colorMatch = color === '' || product.colors.includes(filterElements.color);
                const searchMatch =
                    search === '' ||
                    product[titleTranslate].toLowerCase().includes(search.toLowerCase());
                const priceMatch = minPrice === "" || product.price >= minPrice && product.price <= maxPrice
                const sizeMatch = size === "" || product.size.includes(size)
                let selectedCategoryMatch = ""
                let selectedSubCategoryMatch = ""
                if (selectedCategory === "sale") {
                    selectedCategoryMatch = true
                }
                else if (selectedCategory) {
                    let findId = categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id
                    selectedCategoryMatch = product.category_id == findId
                    // selectedCategoryMatch = (product.category_id == categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id )||
                    // (product.subcategory_id == subcategories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id)
                }
                if (selectedSubCategory) {
                    let findId = subcategories.find(a => a.name.toLowerCase() === selectedSubCategory.toLowerCase()).id
                    selectedSubCategoryMatch = product.subcategory_id == findId
                }
                return colorMatch && searchMatch && priceMatch && sizeMatch && (selectedCategory ? selectedCategoryMatch : true) && (selectedSubCategory ? selectedSubCategoryMatch : true);
            });
        }

    };
    // const [demo, setDemo] = useState(filterProducts(products, filterElements))
    const [demo, setDemo] = useState([])
    // console.log("selectedSubCategory" + selectedSubCategory)
    // console.log(subcategories.find(a => a.name.toLowerCase() === selectedSubCategory.toLowerCase()))
    // let findId = subcategories.find(a => a.name.toLowerCase() === selectedSubCategory.toLowerCase()).id
    // console.log("findSUBID : " + findId)

    // useEffect(() => {
    //     let catId = categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id
    //     console.log("//////// : " + catId)
    //     setDemo([...products.filter(a => a.category_id === catId)])
    //     // setDemo([...demo])
    // }, [selectedCategory])

    useEffect(() => {
        setDemo(filterProducts(products, filterElements));
    }, [filterElements]);


    const handleFilterElement = (e) => {
        setFilterElements({ ...filterElements, [e.target.name]: e.target.value })
    }
    const handleMinMax = (e) => {
        setMinMax({ ...minMax, [e.target.name]: e.target.value })
        if (minMax.minPrice > minMax.maxPrice) {
            setDis(true)
        }
        else {
            setDis(false)
        }
        // console.log("onchange")
        // console.log(dis)
    }
    const handlePriceSubmit = () => {
        setFilterElements({ ...filterElements, minPrice: minMax.minPrice, maxPrice: minMax.maxPrice })
    }

    const [type, setType] = useState("")
    const handleType = (e) => {
        setType(e.target.value)
    }

    useEffect(() => {
        // setDemo([...products])
        if (selectedCategory === "sale") {
            setDemo([...products.filter(a => a.sale)])
        }

        else if (selectedCategory) {
            let catId = categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id
            // console.log("//////// : " + catId)
            setDemo([...products.filter(a => a.category_id === catId)])
        }
        else if (selectedSubCategory) {
            let subCatId = subcategories.find(a => a.name.toLowerCase() === selectedSubCategory.toLowerCase()).id
            setDemo([...products.filter(a => a.subcategory_id === subCatId)])
        }
        else {
            setDemo([...products])

        }

        setLoading(false)
    }, [selectedCategory])

    useEffect(() => {
        // setDemo([...products])
        if (selectedCategory === "sale") {
            setDemo([...products.filter(a => a.sale)])
        }
       else if (selectedSubCategory) {
            let subCatId = subcategories.find(a => a.name.toLowerCase() === selectedSubCategory.toLowerCase()).id
            setDemo([...products.filter(a => a.subcategory_id === subCatId)])
        }
        else if (selectedCategory) {
            let catId = categories.find(a => a.name.toLowerCase() === selectedCategory.toLowerCase()).id
            // console.log("//////// : " + catId)
            setDemo([...products.filter(a => a.category_id === catId)])
        }
        else {
            setDemo([...products])

        }

        setLoading(false)
    }, [selectedSubCategory])

    useEffect(() => {
        if (type === "EC") {
            setDemo([...demo].sort((a, b) => a.price - b.price));
        }

        else if (type === "CE") {
            setDemo([...demo].sort((a, b) => b.price - a.price));
        }

        else if (type === "AZ") {
            setDemo([...demo.sort((a, b) => a[titleTranslate].charCodeAt() - b[titleTranslate].charCodeAt())])
        }

        else if (type === "ZA") {
            setDemo([...demo.sort((a, b) => b[titleTranslate].charCodeAt() - a[titleTranslate].charCodeAt())])
        }
    }, [type])


    let allColors = [];

    products.map((product) => {
        allColors = allColors.concat(product.colors);
    });
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
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedOverlay, setSelectedOverlay] = useState({
        id: 0,
        status: false
    })
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
            title: t[aLang].swalQues,
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
                    title: t[aLang].swalNotRemove,
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
        dispatch({
            type: "SET_FAVORITE",
            payload: [...favorite.filter((t) => t.id !== id)],
        });
    };
    const [selectedColorFilter, setSelectedColorFilter] = useState("")
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                {

                    loading ? <div className="loading"><div></div></div> : <>
                        <div className="pt_80"></div>
                        <Banner bannerBg="http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-04.jpg" pageName="Shop" />
                        <div className="container container-shop" >
                            <section id='shop'>
                                <label htmlFor='filter__open__input' className="filter__open"> <i className='fa fa-sliders'></i></label>
                                <input type="checkbox" id='filter__open__input' />
                                <aside>
                                    <div>
                                        <div>
                                            <label htmlFor="filter__open__input"><i className="filter__close fa-solid fa-xmark"></i></label>
                                            <div>
                                                <h4 className='shop__title'>{t[aLang].searchProducts}</h4>
                                                <input name='search' value={filterElements.search} onChange={handleFilterElement} className='shop__search' type="text" placeholder={t[aLang].searchProducts + " ....."} />
                                            </div>
                                            <div>
                                                <h4 className='shop__title'>{t[aLang].categories}</h4>
                                                <ul className='shop__cat'>
                                                    <li><div onClick={() => {
                                                        setSelectedCat("kids")
                                                        if (selectedCat === "kids") {
                                                            handleCategoryClick()
                                                        }
                                                    }}>{t[aLang].kid}</div></li>
                                                    <li><div onClick={() => {
                                                        setSelectedCat("woman")
                                                        if (selectedCat === "woman") {
                                                            handleCategoryClick()
                                                        }
                                                    }}>{t[aLang].woman}</div></li>
                                                    <li><div onClick={() => {
                                                        setSelectedCat("men")
                                                        if (selectedCat === "men") {
                                                            handleCategoryClick()
                                                        }
                                                    }}>{t[aLang].men}</div></li>
                                                    <li><div onClick={() => {
                                                        setSelectedSubCat("shoes")
                                                        if (selectedSubCat === "shoes") {
                                                            handleCategoryClick()
                                                        }
                                                    }}>{t[aLang].shoes}</div></li>
                                                    <li><div onClick={() => {
                                                        setSelectedSubCat("bag")
                                                        if (selectedSubCat === "bag") {
                                                            handleCategoryClick()
                                                        }
                                                    }}>{t[aLang].bag}</div></li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className='shop__title'>{t[aLang].color}</h4>
                                                <ul className='shop__colors' >
                                                    <Swiper
                                                        spaceBetween={4}
                                                        slidesPerView={5}>

                                                        {allColors.filter((a, b) => b === allColors.indexOf(a)).map(c =>
                                                            <SwiperSlide id={nanoid()}>
                                                                <li onClick={() => selectedColorFilter(c)}>
                                                                    <input readOnly onClick={handleFilterElement} className={selectedColorFilter === c ? "select-color" : ""} name={"color"} value={c} style={{ backgroundColor: c }} />
                                                                </li>
                                                            </SwiperSlide>
                                                        )}
                                                    </Swiper>
                                                </ul>
                                            </div>
                                            <div className='shop__price'>
                                                <h4 className='shop__title'>{t[aLang].filterByPrice}</h4>
                                                <div className="shop__price__input">
                                                    <div>
                                                        <input onClick={(e) => e.target.value = ""} type="number" placeholder='Min Price' name='minPrice' value={minMax.minPrice} onChange={handleMinMax} min={0} max={filterElements.maxPrice} />
                                                        <input onClick={(e) => e.target.value = ""} type="number" placeholder='Max Price' name='maxPrice' value={minMax.maxPrice} onChange={handleMinMax} min={filterElements.minPrice} />
                                                    </div>
                                                    <button disabled={dis} className={dis ? "dis filter__clean" : "filter__clean"} onClick={handlePriceSubmit}>{t[aLang].apply}</button>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className='shop__title'>{t[aLang].size}</h4>
                                                <ul className='shop__size'>
                                                    <label>
                                                        <input type={'radio'} onClick={handleFilterElement} readOnly name={"size"} value="Standart" />
                                                        <h3>{t[aLang].standart}</h3>
                                                    </label>
                                                    <label>
                                                        <input type={'radio'} onClick={handleFilterElement} readOnly name={"size"} value="XL" />
                                                        <h3>{t[aLang].xl}</h3>
                                                    </label>
                                                    <label>
                                                        <input type={'radio'} onClick={handleFilterElement} readOnly name={"size"} value="L" />
                                                        <h3>{t[aLang].l}</h3>
                                                    </label>
                                                    <label>
                                                        <input type={'radio'} onClick={handleFilterElement} readOnly name={"size"} value="M" />
                                                        <h3>{t[aLang].m}</h3>
                                                    </label>
                                                    <label>
                                                        <input type={'radio'} onClick={handleFilterElement} readOnly name={"size"} value="S" />
                                                        <h3>{t[aLang].s}</h3>
                                                    </label>
                                                    <label>
                                                        <input type={'radio'} onClick={handleFilterElement} readOnly name={"size"} value="XS" />
                                                        <h3>{t[aLang].xs}</h3>
                                                    </label>
                                                </ul>
                                            </div>
                                            <button onClick={() => {
                                                setFilterElements({
                                                    search: "",
                                                    color: "",
                                                    minPrice: 0,
                                                    maxPrice: 1000,
                                                    size: ""
                                                })
                                                setSelectedColorFilter("")
                                                let allChecked = [...document.querySelectorAll(".shop__size input")]
                                                allChecked.map(a => a.checked = false)
                                            }} className='filter__clean filt'>{t[aLang].clearFilter}</button>
                                        </div>
                                    </div>
                                </aside>
                                <main>
                                    <div className="shop__products__top">
                                        <p>{t[aLang].showing}  <span> {demo.length} {t[aLang].results}</span></p>
                                        <div>
                                            <select onChange={handleType}>
                                                <option value={"CE"}>{t[aLang].fromExpensiveToCheap}</option>
                                                <option value={"EC"}>{t[aLang].fromCheapToExpensive}</option>
                                                <option value={"AZ"}>{t[aLang].a_z}</option>
                                                <option value={"ZA"}>{t[aLang].z_a}</option>
                                            </select>
                                            {/* <select onChange={(e) => setItemPerPage(e.target.value)}>
                                            <option value={3}>3 items</option>
                                            <option value={4}>4 items</option>
                                            <option value={5}>5 items</option>
                                            <option value={6}>6 items</option>
                                            <option value={7}>7 items</option>
                                        </select> */}
                                            <i onClick={() => setListView(!listView)} className={listView ? "fa-solid fa-border-all" : "fa-solid fa-list-ul"} ></i>
                                        </div>
                                    </div>
                                    <ul className='highlighted_products' style={listView ? { flexDirection: "column" } : { flexDirection: "row" }}>
                                        {demo.length ? (demo
                                            // .slice(itemPerPage * (page - 1), itemPerPage * (page - 1) + itemPerPage)
                                            .map(product => {
                                                const check = basket.find((t) => t.id === product.id);
                                                const checkFav = favorite.find((t) => t.id === product.id);

                                                return (
                                                    <li key={product.id} id={listView && "list__view"} >
                                                        {product.sale ? <div className="product__sale">{product.sale} %</div> : <div ></div>}
                                                        <motion.section initial={{ opacity: 0, transform: "scale(0.9)" }} animate={{ opacity: 1, transform: "scale(1)" }} transition={{ duration: 0.4, property: "transform" }}>
                                                            <Link to={`/single/${product.id}`} >
                                                                <img src={product.images[0]} className="h_product_front" alt="" />
                                                                <img src={product.images[1]} className="h_product_back" alt="" />
                                                            </Link>

                                                            <div className='h_product_details'>
                                                                <h3>{product[titleTranslate].slice(0, 34)} {product[titleTranslate].length > 33 ? "..." : ""} </h3>
                                                                <div>
                                                                    <span>{product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price}   {t[aLang].azn}</span>
                                                                    {product.sale ? <span className='product__sale__price'>{product.price} {t[aLang].azn}</span> : <div ></div>}
                                                                </div>
                                                            </div>
                                                            <div className="single_right">
                                                                <h4>{product[titleTranslate]}</h4>
                                                                <h5> {t[aLang].price} : {product.price}   {t[aLang].azn}</h5>
                                                                <ul className='single_status'>
                                                                    <li><b> {t[aLang].availability} :</b><span>{product.stock ? t[aLang].inStock : t[aLang].notStock}</span></li>
                                                                    <li><b> {t[aLang].category} :</b> <span>{categories.find((a) => a.id === product.category_id)?.name}</span></li>
                                                                    <li><b>{t[aLang].subcategory}: </b> <span>{subcategories.find((a) => a.id === product.subcategory_id)?.name}</span></li>
                                                                </ul>
                                                                <div className='single_right_element single_color_element' >{t[aLang].color}
                                                                    <ul className='single_color'>
                                                                        {product.colors.map((color) =>
                                                                            <li style={{ backgroundColor: color }}></li>
                                                                        )}

                                                                    </ul>
                                                                </div>
                                                                <div className='single_right_element single_size_element'>
                                                                    {t[aLang].size}
                                                                    <ul>
                                                                        {product.size.map((size) =>
                                                                            <li>{size}</li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <ul className={"product_icons"} onClick={(e) => e.stopPropagation()} style={{ display: selectedOverlay.status ? "none" : "block" }}>
                                                                <li onClick={() => {
                                                                    setOpenProductModal(true)
                                                                    setSelectedProduct(product)
                                                                }} ><i className="fa-solid fa-magnifying-glass-plus"></i></li>
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
                                                        </motion.section>
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
                                                                            setSelectedOverlay({ ...selectedOverlay, status: false })
                                                                        }
                                                                        }>{t[aLang].addBasket}</button>
                                                                    </div>
                                                                    <div onClick={() => setSelectedOverlay({ ...selectedOverlay, status: false })} className="product__overlay__x">X</div>
                                                                </div>
                                                            </motion.section>)
                                                        }
                                                    </li>
                                                )
                                            }
                                            )) : (<>   <h1 className="notProduct">{t[aLang].noResultFilter}</h1></>)}

                                    </ul>
                                    {/* <Pagination
                                    setPage={setPage}
                                    page={page}
                                    itemCount={demo.length}
                                    itemPerPage={itemPerPage}
                                /> */}
                                </main>
                            </section>
                            {openProductModal && <ProductModal setOpenProductModal={setOpenProductModal} product={selectedProduct} />}
                        </div>
                    </>
                }
            </motion.section>
        </>
    )
}
const t = a => a
export default connect(t)(Shop)