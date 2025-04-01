import React from "react";
import "./News.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube,  } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const News = () => {
  return (
    <div id="News-page">
      <div className="bread-crump-options">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2>News</h2>
                <div className="links">
                  <a href="">Home |</a>
                  <span> News</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="items">
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
                      <li>| Jun 24, 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
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
                      <li>| Jun 24, 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-3.jpg.webp" alt="" />
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
                      <li>| Jun 24, 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-3.jpg.webp" alt="" />
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
                      <li>| Jun 24, 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="blog-item">
                <div className="blog-item-pic">
                  <img src="src/assets/blog-4.jpg.webp" alt="" />
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
                      <li>| Jun 24, 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
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
                      <li>| Jun 24, 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="blog-sidebar">
              <div className="blog-sidebar-search">
                <form action="">
                  <input type="text" placeholder="Search" />
                  <button>
                      <i><CiSearch/></i>
                  </button>
                </form>
              </div>
              <div className="blog-sidebar-popular">
                <div className="bside-title">
                  <h4>Best seller</h4>
                </div>

                <a href="" className="blog-sidebar-post-item">
                  <div className="blog-sidebar-post-item-pic">
                    <img src="src/assets/br-1.jpg.webp" alt="" />
                  </div>
                  <div className="blog-sidebar-post-item-text">
                    <h5>Air Conditioning Tips & Tricks You Must Know!</h5>
                    <span>Jun 10, 2020</span>
                  </div>
                </a>

                <a href="" className="blog-sidebar-post-item">
                  <div className="blog-sidebar-post-item-pic">
                    <img src="src/assets/br-2.jpg.webp" alt="" />
                  </div>
                  <div className="blog-sidebar-post-item-text">
                    <h5>Air Conditioning Tips & Tricks You Must Know!</h5>
                    <span>Jun 10, 2020</span>
                  </div>
                </a>

                <a href="" className="blog-sidebar-post-item">
                  <div className="blog-sidebar-post-item-pic">
                    <img src="src/assets/br-3.jpg.webp" alt="" />
                  </div>
                  <div className="blog-sidebar-post-item-text">
                    <h5>Air Conditioning Tips & Tricks You Must Know!</h5>
                    <span>Jun 10, 2020</span>
                  </div>
                </a>

                <a href="" className="blog-sidebar-post-item">
                  <div className="blog-sidebar-post-item-pic">
                    <img src="src/assets/br-4.jpg.webp" alt="" />
                  </div>
                  <div className="blog-sidebar-post-item-text">
                    <h5>Air Conditioning Tips & Tricks You Must Know!</h5>
                    <span>Jun 10, 2020</span>
                  </div>
                </a>

                <a href="" className="blog-sidebar-post-item">
                  <div className="blog-sidebar-post-item-pic">
                    <img src="src/assets/br-5.jpg.webp" alt="" />
                  </div>
                  <div className="blog-sidebar-post-item-text">
                    <h5>Air Conditioning Tips & Tricks You Must Know!</h5>
                    <span>Jun 10, 2020</span>
                  </div>
                </a>
                
              </div>
              <div className="blog-sidebar-social">
                <div className="bside-title">
                  <h4>Stay in Teach</h4>
                </div>
                <div className="bside-icon">
                  <div className="row-1">
                <a href="" className="Facebook">
                  <i><FaFacebookF/></i>
                  <span>Facebook</span>
                </a>
                <a href="" className="Twitter">
                  <i><FaTwitter/></i>
                  <span>Twitter</span>
                </a>
                </div>

                <div className="row-2">
                <a href="" className="instagram">
                  <i><FaInstagram/></i>
                  <span>Instagram</span>
                </a>
                <a href="" className="Youtube">
                  <i><FaYoutube/></i>
                  <span>Youtube</span>
                </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
