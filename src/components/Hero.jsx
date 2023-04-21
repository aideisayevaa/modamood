
function Hero({ backImage, heroContentImg, backColor }) {
    return (
        <section id="hero" style={{ background: backColor }}>
            <img className="bg-image" src={backImage} alt="" data-aos="zoom-in" data-aos-duration="1000" />
            <div className="hero-content">
                <img src={heroContentImg} alt="" />
                <div>
                    <button className="btn btn-learn">Learn More</button>
                    <button className="btn btn-shop">Shop Now</button>
                </div>
            </div>
            <ul className="socials " >
                <li data-aos="fade-up"
                    data-aos-duration="800"><i className="fa-brands fa-facebook-f"></i><span>Facebook</span></li>
                <li data-aos="fade-up"
                    data-aos-duration="800"><i className="fa-brands fa-instagram"></i><span>Instagram</span></li>
                <li data-aos="fade-up"
                    data-aos-duration="800"><i className="fa-brands fa-twitter"></i><span>Twitter</span></li>
                <li className="socials-arrow"></li>
            </ul>
        </section>
    )
}

export default Hero