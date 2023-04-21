import { connect } from "react-redux"
import { Link } from "react-router-dom"

function Footer({ aLang, t }) {
    return (
        <footer>
            {/* <img src={FooterBg} alt="" className="footer-bg" /> */}
            <div className="container">
                <div className="logo">
                    <div className="footer-line"></div>
                    <div><Link to="/"><img src="/logo.png" alt="" /></Link></div>
                    <div className="footer-line"></div>
                </div>
                <ul className="footer">
                    <li className='footer-left'>
                        <ul>
                            <li><a target="_blank" href="https://goo.gl/maps/euRM4a9LjBVugvZD6"><span><i className="fa-solid fa-map-location-dot"></i></span>
                                {t[aLang].locationStore}</a></li>
                            <li><a href="tel:123-456-7890"><span><i className="fa-solid fa-phone-volume"></i></span>
                            +994 55 123 45 67</a></li>
                            <li>
                                <p><a href="mailto:isayevaa868@gmail.com"><span><i className="fa-solid fa-envelope-open-text"></i>modamood@gmail.com</span></a></p></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="footer-heading">{t[aLang].aboutWebsite}</li>
                            <li><Link to="/shop">{t[aLang].shop}</Link></li>
                            <li><Link to="/about">{t[aLang].about}</Link></li>
                            <li><Link to="/contact">{t[aLang].location}</Link></li>
                            <li><Link to="/contact">{t[aLang].sendUsMessage}</Link></li>
                            <li><Link to="/">{t[aLang].instagramPosts}</Link></li>
                            <li><Link to="/faqs">{t[aLang].faqs}</Link></li>
                        </ul>
                    </li>
                    {/* <li>
                        <ul>
                            <li className="footer-heading">Shopguide</li>
                            <li>Payments</li>
                            <li>Returns</li>
                            <li>Gift Card</li>
                            <li>Guest purchase</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </li> */}
                    <li>
                        <div>
                            <div className="footer-heading">{t[aLang].socials}</div>
                            <ul className="footer-socials">
                                <li><a target={"_blank"} href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a target={"_blank"} href="https://www.instagram.com/modamood2023/?igshid=YmMyMTA2M2Y%3D"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a target={"_blank"} href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a target={"_blank"} href="http://localhost:5173"><i className="fa-brands fa-google"></i></a></li>
                            </ul>
                        </div>

                        <div>
                            <div className="footer-heading">{t[aLang].payments}</div>
                            <div className="footer-cards">
                                <img src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png" alt="" />
                                <img src="https://logosmarcas.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png" alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
const t = (a) => a
export default connect(t)(Footer)