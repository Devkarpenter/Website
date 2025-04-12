import React from "react";
import "./Home.css";
import Box from "../../Components/box/box";
import Item from "../../Components/box/Item/Item";
import Counter from "../../Components/box/counter/counter";
import Tesimonial from "../../Components/box/Tesimonial/Tesimonial";
import Product from "../../Components/product/Product";
import Blog from "../../Components/blog/blog";


const Home = () => {


  let titles = [{
    title: 'A/C Repair',
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    title: 'A/C Maintenance',
    discription: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Ductless Mini-Split',
    discription: 'consectetur adipiscing elit, sed do eiusmod.',
  },
  ];

  let items = [{
    title: 'No upfront payments',
  },
  {
    title: 'Satisfaction Guarantee',
  },
  {
    title: 'Emergency Service',
  },
  {
    title: '8 Years Experience',
  }
]

  let counters = [{
    title: '3589',
    discription: 'Setified Customers',
    img: 'src/assets/ci-1.png.webp'
  },
  {
    title: '868',
    discription: 'Professional',
    img: 'src/assets/ci-2.png.webp'
  },
  {
    title: '5148',
    discription: 'Equipment Sold',
    img: 'src/assets/ci-3.png.webp'
  },
  {
    title: '51',
    discription: 'Branches Operating',
    img: 'src/assets/ci-4.png.webp'
  }]

  let tesimonial =[{
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    name: 'Sophie Jefferson',
    location: 'Swindon, England',
    img: 'src/assets/ta-1.png.webp'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    name: 'Cynthia Moore', 
    location: 'Kansas, USA',
    img: 'src/assets/ta-2.png.webp'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
    name: 'Andre Curtis',
    location: 'Dresden, Germany',
    img: 'src/assets/ta-3.png.webp'
  },
]


  let products = [{
    discription: 'Heat Storm Wall Gray HS-1000-WX Deluxe Space Saving-1000 W',
    price: '$97.0',
    img: 'src/assets/product-1.jpg.webp'
  },
  {
    discription: 'Stiebel Eltron 074058 120-Volt 1500 Watts Wall Mounted Electric',
    price: '$25.0',
    img: 'src/assets/product-2.jpg.webp'
  },
  {
    discription: ' Vornadobaby Purio Nursery Air Purifier with True HEPA Filter',
    price: '$52.0',
    img: 'src/assets/product-3.jpg.webp'
  },
  {
    discription: 'Heat Storm Wall Gray HS-1000-WX Deluxe Space Saving-1000 W',
    price: '$68.0',
    img: 'src/assets/product-4.jpg.webp'
  }

]

  let blogs = [{
    lebal: 'TIPS & TRICS',
    title: '21 Air Conditioner Maintenance and Home Cooling Tips',
    date: 'Jun 24, 2020',
    name: 'Eleanor Hampton',
  },
  {
    lebal: 'TIPS & TRICS',
    title: '21 Air Conditioner Maintenance and Home Cooling Tips',
    date: 'Jun 24, 2020',
    name: 'Eleanor Hampton',
  },
  {
    lebal: 'TIPS & TRICS',
    title: '21 Air Conditioner Maintenance and Home Cooling Tips',
    date: 'Jun 24, 2020',
    name: 'Eleanor Hampton',
  },
]


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

            {
              items.map((item, index) => {
                return (
                  <div className="col-3" key={index}>
                    <Item title={item.title}  />
                  </div>
                )
              })
            }
            
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
                <a>Get a quote</a>
              </div>
            </div>
          </div>
          <div className="row-2">

            {titles.map((item, index) =>  {
              return (
                <div className="col-4" key={index}>
                  <Box title={item.title} discription={item.discription} />
                </div>
              );
            })}


          </div>
        </div>
      </section>

      <div className="counter-spad">
        <div className="container">
          <div className="row">

            {counters.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <Counter title={item.title} discription={item.discription} img={item.img}/>
                </div>
              );
            }

            )}

            {/* <Counter/> */}


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


            {tesimonial.map((item, index) => {
              return (
                
                <Tesimonial key={index} title={item.title} name={item.name} location={item.location} img={item.img} />
              );
            })}

              

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

            {products.map((item, index) => {
              return(
                
                  <Product key={index} discription={item.discription} price={item.price} img={item.img}/>
                
              )
            }
            )}

            {/* <Product/> */}
            


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

            

              {blogs.map((item, index) => {
                return (
                  <Blog key={index} leble={item.lebal} title={item.title} date={item.date} name={item.name}/>
                );
              })}



              

            </div>
          </div>
        </div>
      </section>

      </div>


      
    </>
  );
};

export default Home;
