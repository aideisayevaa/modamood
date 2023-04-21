import { useEffect, useState } from "react"
import { connect } from "react-redux"
// import Logo from "./logo.png"
import { Link, NavLink } from 'react-router-dom'
import BasketModal from "./BasketModal"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header({ basket, favorite, t, aLang, dispatch, users, singleuser, selectedCategory }) {
    // const [openFlag, setOpenFlag] = useState(false)
    const [openBasket, setOpenBasket] = useState(false)
    const [activeUser, setActiveUser] = useState({})
    const handleLogOut = () => {
        users.map((user) => user.active = false)
        dispatch({
            type: "REGISTER_USER",
            payload: [...users],
        });

        // console.log("bura headerdi: " + users.map((user) => {
        //     return `ad : ${user.name}  | active : ${user.active}  `
        // }))
        // console.log("kliklendo")
    }
    useEffect(() => {
        setActiveUser(singleuser)
    }, [singleuser])

    const [nav, setNav] = useState(false)
    // console.log("bura headerdi: " + users?.map((user) => {
    //     return `ad : ${user.name}  | active : ${user.active}  `
    // }))
    // useEffect(() => {
    //     dispatch({
    //         type: "REGISTER_USER",
    //         payload: [...users],
    //     });
    // }, [activeUser])

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 300) {
                setNav(true);
            } else {
                setNav(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, []);
    const [openNavbar, setopenNavbar] = useState(false)
    console.log(openNavbar)
    const handleShopNav = () => {
        dispatch({
            type: "SET_CATEGORY",
            payload: "",
        });
        dispatch({
            type: "SET_SUBCATEGORY",
            payload: "",
        });
    }
    // console.log("----------------" + singleuser.name + "  || " + singleuser.active)
    return (
        <>
            {/* data-aos="fade-down" */}
            <header style={{ boxShadow: nav ? "1px 2px 20px -5px rgba(89,64,7,0.45)" : "" }}>
                <div className="container">
                    <div className="header">
                        <div className="header-left">
                            <i onClick={() => {
                                console.log(openNavbar)
                                setopenNavbar(true)
                            }} className="menu__icon fa-solid fa-bars"></i>

                            <select onChange={(e) => {
                                dispatch({
                                    type: "LANGUAGE",
                                    payload: e.target.value,
                                });
                            }}
                                value={aLang}>
                                <option value="az">AZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                        <nav>
                            <li className="logo " id="logo_responsive"><img src="/logo.png" alt="" /></li> {/* ModaMood */}
                            {/* <input type="checkbox" id="menu__bar__input" /> */}
                            <ul style={{ transform: openNavbar && "translateX(0%)" }}>

                                <i onClick={() => setopenNavbar(false)} className="menu__x fa-solid fa-xmark"></i>
                                {/* <label htmlFor="menu__bar__input">
                                    <i className="menu__x fa-solid fa-xmark"></i></label> */}
                                <li onClick={() => setopenNavbar(false)}><NavLink to="/"> {t[aLang].home}</NavLink></li>
                                <li onClick={() => {
                                    handleShopNav()
                                    setopenNavbar(false)
                                }}><NavLink to="/shop">{t[aLang].shop}</NavLink></li>
                                <li onClick={() => setopenNavbar(false)}><NavLink to="/about">{t[aLang].about}</NavLink></li>
                                <li className="logo"><Link to={"/"}><img src="/logo.png" alt="" /></Link></li> {/* ModaMood */}
                                {/* <li><NavLink to="/404">404</NavLink></li> */}
                                <li onClick={() => setopenNavbar(false)}><NavLink to="/blogs">{t[aLang].blogs}</NavLink></li>
                                <li onClick={() => setopenNavbar(false)}><NavLink to="/contact">{t[aLang].contact}</NavLink></li>
                            </ul>
                        </nav>
                        <div className="header-right">
                            <span className="header__login">
                                <Link to={"/login"}>  <i className="fa-regular fa-user"></i></Link>
                                <ul>
                                    <li><i className="fa-regular fa-circle-user"></i>{activeUser.name ? activeUser.name : <Link to={"/login"}>  {t[aLang].signinAcc}</Link>}</li>
                                    {activeUser.name && <li onClick={() => handleLogOut()}><i className="fa-solid fa-arrow-right-from-bracket"></i>{t[aLang].signoutAcc}</li>}
                                </ul>
                            </span>
                            {/* {activeUser.name !== "" ? <> */}
                                <span><Link to="/fav"><i className="fa-regular fa-heart"></i>
                                    <div className="like-count">{favorite ? favorite.length : 0}</div></Link>
                                </span>
                                <span onClick={() => setOpenBasket(!openBasket)}><i className="fa-solid fa-cart-shopping"></i>
                                    <div className="basket-count">{basket ? basket.length : 0}</div>
                                </span>
                                {/* </> : <></>} */}
                        </div>
                    </div>
                </div>
            </header>

            {openBasket && <BasketModal setOpenBasket={setOpenBasket} />}
        </>
    )
}
const t = a => a
export default connect(t)(Header)