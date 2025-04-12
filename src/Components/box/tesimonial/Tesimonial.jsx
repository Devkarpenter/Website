import React from 'react'

const tesimonial = ({title, name, location, img}) => {
  return (
    <div>
      <div className="col-content">
                <div className="tesimonial-content">
                  <p>
                    {title}
                  </p>
                </div>
                <div className="tesimonial-image">
                  <div className="author-image">
                    <img src={img} alt="" />
                  </div>
                  <div className="author-text">
                    <h4>{name}</h4>
                    <span>{location}</span>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default tesimonial
