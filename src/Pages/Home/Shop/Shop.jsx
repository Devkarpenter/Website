import React from "react";
import "./Shop.css";
import { CiSearch } from "react-icons/ci";

const Shop = () => {
  return (
    <div id="Shop-page">
      <div className="bread-crump-options">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2>Shop</h2>
                <div className="links">
                  <a href="">Home |</a>
                  <span> Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div className="row-2">
                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-1.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-2.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Stiebel Eltron 074058 120-Volt 1500 Watts Wall Mounted
                          Electric
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-3.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          {" "}
                          Vornadobaby Purio Nursery Air Purifier with True HEPA
                          Filter
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-4.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-4.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-4.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-4.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-4.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>

                <div className="items">
                  <div className="product-item">
                    <div className="item-pic">
                      <img src="src/assets/product-4.jpg.webp" alt="" />
                    </div>
                    <div className="item-text">
                      <h5>
                        <a href="">
                          Heat Storm Wall Gray HS-1000-WX Deluxe Space
                          Saving-1000 W
                        </a>
                      </h5>
                      <div className="price">$97.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="product-sidebar">
                <div className="product-sidebar-search">
                  <form action="">
                    <input type="text" placeholder="Search" />
                    <button>
                      <i>
                        <CiSearch />
                      </i>
                    </button>
                  </form>
                </div>
                <div className="product-sidebar-price">
                  <div className="pside-title">
                    <h4>Filter by price</h4>
                  </div>
                  <div className="price-range-warp">
                    <div className="price-range"></div>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="product-sidebar-bestseller">
                  <div className="pside-title">
                    <h4>Best seller</h4>
                  </div>
                  <a href="">
                    <div className="product-sidebar-item">
                      <div className="product-sidebar-img">
                        <img src="src/assets/bs-1.jpg.webp" alt="" />
                      </div>
                      <div className="product-sidebar-text">
                        <h6>Stiebel Eltron 074058 120-Volt 1500 Watts Wall</h6>
                        <span>$79.0</span>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className="product-sidebar-item">
                      <div className="product-sidebar-img">
                        <img src="src/assets/bs-2.jpg.webp" alt="" />
                      </div>
                      <div className="product-sidebar-text">
                        <h6>Stiebel Eltron 074058 120-Volt 1500 Watts Wall</h6>
                        <span>$79.0</span>
                      </div>
                    </div>
                  </a>

                  <a href="">
                    <div className="product-sidebar-item">
                      <div className="product-sidebar-img">
                        <img src="src/assets/bs-4.jpg.webp" alt="" />
                      </div>
                      <div className="product-sidebar-text">
                        <h6>Stiebel Eltron 074058 120-Volt 1500 Watts Wall</h6>
                        <span>$79.0</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
