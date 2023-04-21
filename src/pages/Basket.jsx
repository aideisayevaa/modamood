import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Swal from 'sweetalert2'
import { motion } from "framer-motion";
function Basket({ products, basket, dispatch, aLang, t }) {
    const increaseCount = (id) => {
        const element = basket.find((a) => a.id === id);
        element.count++;
        dispatch({
            type: "SET_BASKET",
            payload: [...basket],
        });
    };
    const decreaseCount = (id) => {

        const element = basket.find((a) => a.id === id);
        if (element.count > 1) {
            element.count--;
        }
        else if (!element.count || element.count === 1) {
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
                        payload: [...basket.filter((a) => a.id !== id)],
                    });

                    Swal.fire({
                        title: t[aLang].swalRemove,
                        // text: "....",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    return;
                } else {
                    element.count++;
                    Swal.fire({
                        title:  t[aLang].swalNotRemove,
                        text: "....",
                        icon: "warning",
                        timer: 1000,
                        showConfirmButton: false,
                    });

                }
            });

        }

        dispatch({
            type: "SET_BASKET",
            payload: [...basket],
        });
    };
    const deleteBasket = (id) => {

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
    }
    const total = basket.reduce((acc, item) => {
        let product = products.find((a) => a.id === item.id);
        return acc + (+item.count * +(product?.sale ? (product?.price - (product?.price * product?.sale / 100)).toFixed(2) : product?.price));
    }, 0).toFixed(2);

    let titleTranslate = "title_" + aLang

    const handleRemoveAll = () => {

        Swal.fire({
            title: t[aLang].swalBasketRemove,
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
                    payload: [],
                });
                Swal.fire({
                    title: t[aLang].swalBasketRemoveTrue,
                    // text: "....",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            } else {
                Swal.fire({
                    title:  t[aLang].swalBasketRemoveFalse,
                    // text: "....",
                    icon: "warning",
                    timer: 1000,
                    showConfirmButton: false,
                });
            }
        });
    }
    let totalTabel = 0
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>

                <div className="pt_80"></div>
                <Banner pageName={"Basket"} bannerBg={"http://themes.g5plus.net/april/wp-content/uploads/2017/08/page-title-01.jpg?id=2336"} />
                {/* <div className="container"> */}
                {!basket.length ? (<div className="container"><h1 className="notProduct basketNotProduct">{t[aLang].productNotAdded}</h1></div>) : (<>

                    <table id="basket_table">
                        <thead>
                            <tr>
                                <th>{t[aLang].productName}</th>
                                <th>{t[aLang].price}</th>
                                <th>{t[aLang].color}</th>
                                <th>{t[aLang].size}</th>
                                <th>{t[aLang].quantity}</th>
                                <th>{t[aLang].total}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length ? (
                                    basket.map((a) => {
                                        const product = products.find((t) => t.id === a.id);
                                        return (
                                            <tr key={a.id} className="table_row">
                                                <td>
                                                    <div className="close_basket" onClick={(id) => deleteBasket(a.id)}><button>X</button></div>
                                                    <Link to={`/single/${product.id}`}>
                                                        <img src={product.images[0]} alt="" />
                                                        <h2>{product[titleTranslate]}</h2>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <span>{product.sale ? (product.price - (product.price * product.sale / 100)).toFixed(2) : product.price}    {t[aLang].azn}</span>
                                                </td>
                                                <td>
                                                    <ul className='single_color'>
                                                        <li style={{ backgroundColor: a.color }}></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul className="single_size_element single_right_element" >
                                                        <li>{a.size}</li>
                                                    </ul>
                                                </td>
                                                <td >
                                                    <div className="operations">
                                                        <button onClick={() => decreaseCount(a.id)}>-</button>
                                                        <h3>{a.count}</h3>
                                                        <button onClick={() => increaseCount(a.id)}>+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    {/* <span> {+a.count * +(product.sale ? ((product.price).toFixed(2) - ((product.price).toFixed(2) * ((product.sale).toFixed(2) / 100).toFixed(2))).toFixed(2) : (product.price.toFixed(2)).toFixed(2))}    {t[aLang].azn}</span> */}
                                                    <span style={{ display: "none" }}> {totalTabel = +a.count * +(product.sale ? (product.price - (product.price * (product.sale / 100))) : (product.price))}</span>
                                                    <span> {totalTabel.toFixed(2)}    {t[aLang].azn}</span>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <div className="loading"><div></div></div>
                                )
                            }
                        </tbody>



                    </table>
                    <div className="line"></div>
                    <div className="total">
                        <button className=" filter__clean" onClick={handleRemoveAll}>{t[aLang].removeProducts}</button>

                        <div>
                            {t[aLang].total}  : <span> {total}   {t[aLang].azn}</span>
                        </div>
                    </div>
                    <div className="total__bottom">
                        <Link to={"/paymentinfo"}><button className="filter__clean">{t[aLang].pay}</button></Link>
                    </div>
                </>)}


                {/* </div> */}
            </motion.section>
        </>
    );
}
const t = (a) => a;
export default connect(t)(Basket);
