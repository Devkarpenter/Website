import React from 'react'

const Product = ({discription, price, img}) => {
  return (
   
      <div className="items">
              <div className="product-item">
                <div className="item-pic">
                  <img src={img} alt="" />
                </div>
                <div className="item-text">
                  <h5>
                    <a href="">
                      {discription}
                    </a>
                  </h5>
                  <div className="price">{price}</div>
                </div>
              </div>
            </div>
  )
}

export default Product
