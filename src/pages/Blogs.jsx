import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Blogs({ blogs, t, aLang }) {
  return (
    <>
      <div className="pt_80"></div>
      <div className="container">
        <div class="blog-container">
          {blogs.map((a) =>
          <Link to={`/blog/${a.id}`}  key={a.id}>
            <div class="blog-post">
                <img class="post-image" src={a.image} alt="Image Description" />
                <h4>{a["content_" + aLang][0][0]}</h4>
                <p>{t[aLang].readMore}</p>
            </div>
            </Link>
          )}
          
          {blogs.map((a) =>
          <Link to={`/blog/${a.id}`}  key={a.id}>
            <div class="blog-post">
                <img class="post-image" src={a.image} alt="Image Description" />
                <h4>{a["content_" + aLang][0][0]}</h4>
                <p>{t[aLang].readMore}</p>
            </div>
            </Link>
          )}
        </div>
      </div>
      {/* <section id="blogspage">
        <div className="container">
          <ul className="blogspage">
            {blogs.map((a) =>
              <li key={a.id}>
                <Link to={`/blog/${a.id}`}>
                  <div className="blogspage_img">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="blogspage_details">
                    <h4>{a["content_" + aLang][0][0]}</h4>
                    <span>{t[aLang].readMore}</span>
                  </div>
                </Link>
              </li>
            )}

          </ul>
        </div>
      </section> */}
    </>
  )
}
const t = a => a
export default connect(t)(Blogs)