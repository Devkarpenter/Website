import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import './About.css';

const About = () => {
  return (
    <div id="About-page">

        <div className="bread-crump-options">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text">
                            <h2>About</h2>
                            <div className="links">
                                <a href="">
                                    Home | 
                                </a>
                                <span> About</span>
                            </div>
                        </div>
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

      <div className="about-video">
        <div className="container">
            <div className="about-img">
            <a href="https://www.youtube.com/watch?v=rD0IDifBAS4?autoplay=1" class="play-btn video-popup">
            <i><FaCirclePlay /></i></a>
            </div>
        </div>
      </div>

        <div className="counter-about">
            <div className="container">
                <div className="row">
                
                </div>
            </div>
        </div>

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

    </div>
  )
}

export default About
