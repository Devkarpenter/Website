import React from "react";
import "./Home.css";



const Home = () => {
  return (
    <>
    <div id="home-page">
      <section id="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h2>keeping your home comfortable all year long</h2>
            <p>that air conditioning systems are regularly maintained</p>
            <a href="#" className="primary-btn">
              {" "}
              Contact us{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="benifit">
        <div className="container">
          <div className="row">
            <div className="item item-1">
              <div className="benifit-items">
                <img src="src/assets/benifit-1.png.webp" alt="" />
                <h4>No upfront payments</h4>
              </div>
            </div>
            <div className="item item-2">
              <div className="benifit-items">
                <img src="src/assets/benifit-2.png.webp" alt="" />
                <h4>Satisfaction Guarantee</h4>
              </div>
            </div>
            <div className="item item-3">
              <div className="benifit-items">
                <img src="src/assets/benifit-3.png.webp" alt="" />
                <h4>Emergency Service</h4>
              </div>
            </div>
            <div className="item item-4">
              <div className="benifit-items">
                <img src="src/assets/benifit-4.png.webp" alt="" />
                <h4>8 Years Experience</h4>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="service-home spad">
        <div className="container">
          <div className="row">
            <div className="content-1">
              <div className="section-title">
                <span>Our services</span>
                <h2>what we can offer you</h2>
              </div>
            </div>
            <div className="content-2">
              <div className="border-btn">
                <a href="">Get a quote</a>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="box">
              <div className="box-img">
                <div className="box-icon"></div>
                <img src="src/assets/services-4.jpg.webp" alt="" />
              </div>
              <div className="box-content">
                <h4>Duct Services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="box">
              <div className="box-img">
                <div className="box-icon"></div>
                <img src="src/assets/services-5.jpg.webp" alt="" />
              </div>
              <div className="box-content">
                <h4>A/C Installation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="box">
              <div className="box-img">
                <div className="box-icon"></div>
                <img src="src/assets/services-6.jpg.webp" alt="" />
              </div>
              <div className="box-content">
                <h4>Cleaning & Optimization</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="counter-spad">
        <div className="container">
          <div className="row">
            <div className="counter-item">
              <img src="src/assets/ci-1.png.webp" alt="" />
              <span className="num-count">3589</span>
              <h4>Setified Customers</h4>
            </div>
            <div className="counter-item">
              <img src="src/assets/ci-2.png.webp" alt="" />
              <span className="num-count">868</span>
              <h4>Professional</h4>
            </div>
            <div className="counter-item">
              <img src="src/assets/ci-3.png.webp" alt="" />
              <span className="num-count">5148</span>
              <h4>Equipment Sold</h4>
            </div>
            <div className="counter-item">
              <img src="src/assets/ci-4.png.webp" alt="" />
              <span className="num-count">51</span>
              <h4>Branches Operating</h4>
            </div>
          </div>
        </div>
      </div>

      <section className="about-spad">
        <div className="container">
          <div className="row">
            <div className="about-pic">
              <img src="src/assets/ap-1.jpg.webp" alt="" />
              {/* <img src="src/assets/ap-2.jpg.webp" alt="" /> */}
            </div>
            <div className="about-text">
              <span>Welcom to HVAC</span>
              <h2>Quality Heating & Cooling</h2>
              <p>
                We provide customers with an industry leading 10-year
                installation warranty and a two-year service and repair
                warranty. With most companies, you will get a standard
                manufacturers warranty on installations and a one-year warranty
                on service and repair work. We believe our warranties set us
                apart from our competitors and show our commitment to quality
                work and service.
              </p>
              <ul>
                <li>
                  <span> </span>
                  Consectetur adipiscing elit, sed do eiusmod
                </li>
                <li>
                  <span></span>
                  Tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li>
                  <span></span>
                  Quis ipsum suspendisse ultrices gravida.
                </li>
              </ul>
              <div className="content-2">
                <div className="border-btn">
                  <a href="">Get a quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tesimonial-spad">
        <div className="container">
          <div className="row-1">
            <div className="section-title">
              <span>Testimonial</span>
              <h2>What Cilents Say?</h2>
            </div>
          </div>
          <div className="row-1">
            <div className="col">
              <div className="col-content">
                <div className="tesimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="tesimonial-image">
                  <div className="author-image">
                    <img src="src/assets/ta-1.png.webp" alt="" />
                  </div>
                  <div className="author-text">
                    <h4>Sophie Jefferson</h4>
                    <span>Swindon, England</span>
                  </div>
                </div>
              </div>

              <div className="col-content">
                <div className="tesimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="tesimonial-image">
                  <div className="author-image">
                    <img src="src/assets/ta-2.png.webp" alt="" />
                  </div>
                  <div className="author-text">
                    <h4>Sophie Jefferson</h4>
                    <span>Swindon, England</span>
                  </div>
                </div>
              </div>

              <div className="col-content">
                <div className="tesimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="tesimonial-image">
                  <div className="author-image">
                    <img src="src/assets/ta-3.png.webp" alt="" />
                  </div>
                  <div className="author-text">
                    <h4>Sophie Jefferson</h4>
                    <span>Swindon, England</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="callto-spad">
        <div className="container">
          <div className="callto-content">
            <div className="callto-text">
              <span>Modern Styling for your Modern Life</span>
              <h2>less power Consume, more cooling</h2>
              <a href="" className="primary-btn">
                installation now
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="products-home">
        <div className="container">
          <div className="row-1">
            <div className="content">
              <span>HVAC PRODUCTS</span>
              <h2>Heating & Cooling Store</h2>
            </div>
            <div className="content-btn">
              <a href="" className="primary-btn">
                VIEW ALL PRODUCTS
              </a>
            </div>
          </div>

          <div className="row-2">
            <div className="items">
              <div className="product-item">
                <div className="item-pic">
                  <img src="src/assets/product-1.jpg.webp" alt="" />
                </div>
                <div className="item-text">
                  <h5>
                    <a href="">
                      Heat Storm Wall Gray HS-1000-WX Deluxe Space Saving-1000 W
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
                      Heat Storm Wall Gray HS-1000-WX Deluxe Space Saving-1000 W
                    </a>
                  </h5>
                  <div className="price">$97.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-spad">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="title">
                <span>Latest News</span>
                <h2>HVAC Tips & Tricks</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="blog">
              <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-1.jpg.webp" alt="" />
                </div>

                <div className="blog-item-text">
                  <div className="lable">
                    <span>TIPS & TRICS </span>
                  </div>
                  <h4>
                    <a href="">
                      21 Air Conditioner Maintenance and Home Cooling Tips
                    </a>
                  </h4>
                  <div className="ul">
                  <ul>
                    <li>
                      BY <span>Eleanor Hampton</span>
                    </li>
                    <li>|  Jun 24, 2020</li>
                  </ul>
                  </div>
                </div>
              </div>

              <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-2.jpg.webp" alt="" />
                </div>

                <div className="blog-item-text">
                  <div className="lable">
                    <span>TIPS & TRICS </span>
                  </div>
                  <h4>
                    <a href="">
                      21 Air Conditioner Maintenance and Home Cooling Tips
                    </a>
                  </h4>
                  <div className="ul">
                  <ul>
                    <li>
                      BY <span>Eleanor Hampton</span>
                    </li>
                    <li>|  Jun 24, 2020</li>
                  </ul>
                  </div>
                </div>
              </div>

              <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-6.jpg.webp" alt="" />
                </div>

                <div className="blog-item-text">
                  <div className="lable">
                    <span>TIPS & TRICS </span>
                  </div>
                  <h4>
                    <a href="">
                      21 Air Conditioner Maintenance and Home Cooling Tips
                    </a>
                  </h4>
                  <div className="ul">
                  <ul>
                    <li>
                      BY <span>Eleanor Hampton</span>
                    </li>
                    <li> |  Jun 24, 2020</li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>


      
    </>
  );
};

export default Home;
