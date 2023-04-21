import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { connect } from 'react-redux'

function Banner({ bannerBg, aLang, t, selectedSubCategory, selectedCategory }) {
    const location = useLocation();
    const [pageName, setPageName] = useState("");

    useEffect(() => {
        // if(location.pageName.includes("woman")){
        //     alert("salam")
        // }
       if (location.pathname.split("/")[1] == "fav") {
            setPageName("favorites");
        }
        else if (location.pathname.split("/")[1] == "basket") {
            setPageName("basket");
        }
      else  if (selectedCategory) {
            setPageName(selectedCategory.toLowerCase());
        }
        else if (selectedSubCategory) {
            setPageName(selectedSubCategory.toLowerCase());
        }
        // if (location.pathname.split("/")[2] == 3) {
        //     setPageName("bag");
        // }
        // else if (location.pathname.split("/")[2] == 1) {
        //     setPageName("shoes");
        // }
        // else if (location.pathname.split("/")[1] == "kids") {
        //     setPageName("kid");
        // }
        // else if (location.pathname.split("/")[1] == "fav") {
        //     setPageName("favorites");
        // }
        // else if (location.pathname.split("/")[1] == "basket") {
        //     setPageName("basket");
        // }
        else {
            setPageName(location.pathname.split("/")[1]);
        }
        console.log(location.pathname.split("/")[1])

    }, [location.pathname,selectedSubCategory,selectedCategory]);

    return (
        <div className="container__full">
            <section id='banner'>
                <img src={bannerBg} className='banner-img' alt="" />
                <div className="container">
                    <h3>{t[aLang][pageName]}</h3>
                    <p>
                        <span><Link to="/">{t[aLang].home}</Link></span>
                        <span>/</span>
                        <span><Link to=''>{t[aLang][pageName]}</Link></span>
                    </p>
                </div>
            </section>
        </div>
    )
}

const t = (a) => a;
export default connect(t)(Banner)