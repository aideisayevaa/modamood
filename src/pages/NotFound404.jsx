import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
function NotFound404({ t, aLang }) {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            <section id='not_found'>
                <div className="container">
                    <div className="not_found_content">
                        <h3> {t[aLang].oops}!</h3>
                        <h3> {t[aLang].pageNotFound}!</h3>
                        <Link to="/"><p> {t[aLang].goBackToHomePage}</p></Link>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}
const t = (a) => a
export default connect(t)(NotFound404)