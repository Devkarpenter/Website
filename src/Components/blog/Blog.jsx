import React from 'react'

const blog = ({name, leble, title, date}) => {
  return (
    <div>
        <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-1.jpg.webp" alt="" />
                </div>

                <div className="blog-item-text">
                  <div className="lable">
                    <span>{leble} </span>
                  </div>
                  <h4>
                    <a href="">
                      {title}
                    </a>
                  </h4>
                  <div className="ul">
                  <ul>
                    <li>
                      BY <span>{name}</span>
                    </li>
                    <li>|  {date}</li>
                  </ul>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default blog
