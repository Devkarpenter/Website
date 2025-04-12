import React from 'react'

const Counter = ({title, discription, img}) => {
  return (
    <div>
        <div className="counter-item">
              <img src={img} alt="" />
              <span className="num-count">{title}</span>
              <h4>{discription}</h4>
        </div>
    </div>
  )
}

export default Counter
