import React from 'react'

const Box = ({title, discription}) => {
  return (
    <div>
      <div className="box">
              <div className="box-img">
                <div className="box-icon"></div>
                <img src="src/assets/services-4.jpg.webp" alt="" />
              </div>
              <div className="box-content">
                <h4>{title}</h4>
                <p>
                  {discription}
                </p>
                <a href="">More Info</a>
              </div>
            </div>
    </div>
  )
}

export default Box
