import React from 'react'

const Item = ({title}) => {
  return (
    <div>
      <div className="item item-1">
              <div className="benifit-items">
                <img src="src/assets/benifit-1.png.webp" alt="" />
                <h4>{title}</h4>
              </div>
            </div>
    </div>
  )
}

export default Item
