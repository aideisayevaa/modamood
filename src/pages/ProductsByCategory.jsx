import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
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
function ProductsByCategory({ products, basket, favorite, dispatch, categories, subcategories, aLang, t }) {
    const { category, subcategory_id } = useParams();
    const { sale } = useParams();
    const [loading, setLoading] = useState(true)
    const [listView, setListView] = useState(false)
    const [openProductModal, setOpenProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedColor, setSelectedColor] = useState("")
    const [dis, setDis] = useState(false)
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
        maxPrice: Math.ceil((products.sort((a, b) => b.price - a.price))[0].price)
    })
    let allColors = [];
    const [demo, setDemo] = useState(filterProducts(products, filterElements))
    
    const findCategory = categories.find(
        (a) => a.name?.toLowerCase() === category?.toLowerCase()
    );
    let filteredProducts = products.filter(
        (a) =>
            a.category_id === findCategory?.id || a.subcategory_id === +subcategory_id
    );
    sale && (filteredProducts = products.filter(
        (a) =>
            a.sale
    ))
    // const [demo, setDemo] = useState([...filteredProducts])

    useEffect(() => {
        setDemo([...filteredProducts])
        setLoading(false)
    }, [filteredProducts])


    // const [search, setSearch] = useState("")
    // const [color, setColor] = useState("")
    // const [size, setSize] = useState("")
    // const [type, setType] = useState("")
    // const [price, setPrice] = useState({
    //     min: 0,
    //     max: 1000,
    // });
    // const [itemPerPage, setItemPerPage] = useState(2)
    // const [page, setPage] = useState(1);
    // console.log("itemperpage : " + itemPerPage)
    // console.log("page : " + page)
    // const handleColor = (e) => {
    //     setColor(e.target.name)
    // }
    // const handleSize = (e) => {
    //     setSize(e.target.name)
    // }
    // const handleType = (e) => {
    //     setType(e.target.value)
    // }
    // const handlePrice = (e) => {
    //     setPrice({ ...price, [e.target.name]: e.target.value })
    // }


    // useEffect(() => {
    //     setDemo([...products.filter((a) => a[titleTranslate].toLowerCase().includes(search.trim().toLowerCase()))])
    // }, [search])

    // useEffect(() => {
    //     setDemo([...products.filter((a) => a.colors.includes(color))])
    // }, [color])

    // useEffect(() => {
    //     setDemo([...products.filter((a) => a.size.includes(size))])
    // }, [size])

    // useEffect(() => {
    //     setDemo([...products.filter((a) => a.price >= price.min && a.price <= price.max)])
    // }, [price])

    useEffect(() => {
        if (type === "EC") {
            setDemo([...products].sort((a, b) => a.price - b.price));
        }

        else if (type === "CE") {
            setDemo([...products].sort((a, b) => b.price - a.price));
        }

        else if (type === "AZ") {
            setDemo([...products.sort((a, b) => a.title.charCodeAt() - b.title.charCodeAt())])
        }

        else if (type === "ZA") {
            setDemo([...products.sort((a, b) => b.title.charCodeAt() - a.title.charCodeAt())])
        }
        else {
            setDemo([...products])
        }
    }, [type])
    

    products.map((product) => {
        allColors = allColors.concat(product.colors);
    });


    /* _____________________________ */


    const filterProducts = (products, filterElements) => {
        const { color, search, minPrice, maxPrice, size } = filterElements;
        return products.filter((product) => {
            const colorMatch = color === '' || product.colors.includes(filterElements.color);
            const searchMatch =
                search === '' ||
                product[titleTranslate].toLowerCase().includes(search.toLowerCase());
            const priceMatch = minPrice === "" || product.price >= minPrice && product.price <= maxPrice
            const sizeMatch = size === "" || product.size.includes(size)
            return colorMatch && searchMatch && priceMatch && sizeMatch;
        });
    };
   

    useEffect(() => {
        setDemo(filterProducts(products, filterElements));
    }, [filterElements, products]);


    const handleFilterElement = (e) => {
        setFilterElements({ ...filterElements, [e.target.name]: e.target.value })
    }
    const handleMinMax = (e) => {
        if (+minMax.minPrice >= +minMax.maxPrice) {
            setDis(true)
        }
        else {
            setDis(false)
        }
        setMinMax({ ...minMax, [e.target.name]: e.target.value })

    }
    const handlePriceSubmit = () => {
        setFilterElements({ ...filterElements, minPrice: minMax.minPrice, maxPrice: minMax.maxPrice })
    }

    console.log(filterElements)
    const [type, setType] = useState("")
    const handleType = (e) => {
        setType(e.target.value)
    }

    useEffect(() => {
        setDemo([...products])
        setLoading(false)
    }, [products])

    useEffect(() => {
        if (type === "EC") {
            setDemo([...products].sort((a, b) => a.price - b.price));
        }

        else if (type === "CE") {
            setDemo([...products].sort((a, b) => b.price - a.price));
        }

        else if (type === "AZ") {
            setDemo([...products.sort((a, b) => a[titleTranslate].charCodeAt() - b[titleTranslate].charCodeAt())])
        }

        else if (type === "ZA") {
            setDemo([...products.sort((a, b) => b[titleTranslate].charCodeAt() - a[titleTranslate].charCodeAt())])
        }
        else {
            setDemo([...products])
        }
    }, [type])

    products.map((product) => {
        allColors = allColors.concat(product.colors);
    });
    const addBasket = (id) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket, { id: id, count: 1 }],
        });
    };
    const removeBasket = (id) => {
        dispatch({
            type: "SET_BASKET",
            payload: [...basket.filter((t) => t.id !== id)],
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
    

    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <Header />
                <div className="pt_80"></div>
                {

                    loading ? <div className="loading"><div></div></div> : <>

                        <Banner bannerBg="http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-04.jpg" pageName="Shop" />
                        <div className="container">
                            <section id='shop'>
                                <aside>
                                    <div>
                                        <h4 className='shop__title'>{t[aLang].searchProducts}</h4>
                                        <input value={search} onChange={(e) => setSearch(e.target.value)} className='shop__search' type="text" placeholder={t[aLang].searchProducts + " ....."} />
                                    </div>
                                    <div>
                                        <h4 className='shop__title'>{t[aLang].categories}</h4>
                                        <ul className='shop__cat'>
                                            <li><Link to={'/kids/all'}>{t[aLang].kid}</Link></li>
                                            <li><Link to={'/woman/all'}>{t[aLang].woman}</Link></li>
                                            <li><Link to={'/men/all'}>{t[aLang].men}</Link></li>
                                            <li><Link to={'/category/1'}>{t[aLang].shoes}</Link></li>
                                            <li><Link to={'/category/3'}>{t[aLang].bag}</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className='shop__title'>{t[aLang].color}</h4>
                                        <ul className='shop__colors'>
                                            <Swiper
                                                spaceBetween={4}
                                                slidesPerView={5}>

                                                {allColors.filter((a, b) => b === allColors.indexOf(a)).map(color =>
                                                    <SwiperSlide id={nanoid()}>
                                                        <li>
                                                            <input readOnly onClick={handleColor} name={color} style={{ backgroundColor: color }} />
                                                        </li>
                                                    </SwiperSlide>
                                                )}
                                            </Swiper>
                                        </ul>
                                    </div>
                                    <div className='shop__price'>
                                        <h4 className='shop__title'>{t[aLang].filterByPrice}</h4>
                                        <div className="shop__price__input">
                                            <input type="number" placeholder='Min Price' name='min' value={price.min} onChange={handlePrice} min={0} />
                                            <input type="number" placeholder='Max Price' name='max' value={price.max} onChange={handlePrice} min={0} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='shop__title'>{t[aLang].size}</h4>
                                        <ul className='shop__size'>
                                            <input onClick={handleSize} readOnly name={"Standart"} value="Standart" />
                                            <input onClick={handleSize} readOnly name={"XL"} value="Extra Large (XL)" />
                                            <input onClick={handleSize} readOnly name={"L"} value="Large (L)" />
                                            <input onClick={handleSize} readOnly name={"M"} value="Medium (M)" />
                                            <input onClick={handleSize} readOnly name={"S"} value="Small (S)" />
                                            <input onClick={handleSize} readOnly name={"XS"} value="Extra Small (XS)" />
                                        </ul>
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
                                            <i onClick={() => setListView(false)} className="fa-solid fa-border-all"></i>
                                            <i onClick={() => setListView(true)} className="fa-solid fa-list-ul"></i>
                                        </div>
                                    </div>
                                    <ul className='highlighted_products' style={listView ? { flexDirection: "column" } : { flexDirection: "row" }}>
                                        {demo
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
                                                                <h3>{product[titleTranslate]}</h3>
                                                                <span>{product.price}   {t[aLang].azn}</span>
                                                            </div>
                                                            <div className="single_right">
                                                                <h4>{product[titleTranslate]}</h4>
                                                                <h5> {t[aLang].price} : {product.price}   {t[aLang].azn}</h5>
                                                                <ul className='single_status'>
                                                                    <li><b> {t[aLang].availability} :</b><span>{product.stock ? t[aLang].inStock : t[aLang].notStock}</span></li>
                                                                    <li><b> {t[aLang].category} :</b> <span>{categories.find((a) => a.id === product.category_id)?.name}</span></li>
                                                                    <li><b>{t[aLang].subcategory}: </b> <span>{subcategories.find((a) => a.id === product.subcategory_id)?.name}</span></li>
                                                                </ul>
                                                                <div className='single_right_element single_color_element'>{t[aLang].color}
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

                                                            <ul className='product_icons' onClick={(e) => e.stopPropagation()}>
                                                                <li><i onClick={() => {
                                                                    setOpenProductModal(true)
                                                                    setSelectedProduct(product)
                                                                }} className="fa-solid fa-magnifying-glass-plus"></i></li>
                                                                <li>  {check ? (
                                                                    <i onClick={() => removeBasket(product.id)} className="fa-regular fa-square-minus"></i>

                                                                ) : (
                                                                    <i onClick={() => addBasket(product.id)} className="fa-solid fa-cart-plus"></i>
                                                                )}</li>
                                                                <li>  {checkFav ? (
                                                                    <i onClick={() => removeFavorite(product.id)} className="fa-solid fa-heart-circle-check"></i>

                                                                ) : (
                                                                    <i onClick={() => addFavorite(product.id)} className="fa-regular fa-heart "></i>
                                                                )}</li>
                                                            </ul>
                                                        </motion.section>
                                                    </li>
                                                )
                                            }
                                            )}

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
const t = (a) => a;
export default connect(t)(ProductsByCategory)