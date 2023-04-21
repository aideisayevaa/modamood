import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';

function SingleBlogPage({ blogs, aLang, t }) {
    let { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="pt_80"></div>
                <div className="container">
                    <section id='blogs'>
                        <section id='single__blog'>
                            <h2>{blog["content_" + aLang][0][0]}</h2>
                            {/* <h2>{blog.id&&blog.content}</h2> */}
                            <img src={blog.image} alt="" />
                            <div className="line"></div>
                            {blog["content_" + aLang].map(a =>
                                <>
                                    <h3>{a[0]}</h3>
                                    <p>{a[1]}</p>
                                    <div className='blog__images'>
                                        <img src={a[2]} alt="" />
                                        <img src={a[3]} alt="" />
                                        <img src={a[4]} alt="" />
                                    </div>
                                    <div className="line"></div>
                                </>
                            )}
                        </section>
                        <aside id='blogs__aside'>
                            <ul>
                                {blogs.map((a) =>
                                    <Link to={`/blog/${a.id}`} key={a.id}>
                                        <li>
                                            <div className="blogs__aside__img">
                                                <img src={a.image} alt="" />
                                            </div>
                                            <div className="blogs__aside__details">
                                                <h5>{a["content_" + aLang][0][0].slice(0, 20)}</h5>
                                                <span>{t[aLang].readMore}</span>
                                            </div>
                                        </li>
                                    </Link>
                                )}

                            </ul>
                        </aside>
                    </section>
                </div>
            </motion.section>

        </>
    )
}
const t = a => a
export default connect(t)(SingleBlogPage)