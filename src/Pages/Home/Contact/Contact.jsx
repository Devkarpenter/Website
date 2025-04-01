import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id="Contact-page">
      <div className="bread-crump-options">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text">
                <h2>Contact</h2>
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
                <div className="contact-form">
                    <h4>SEND MESSAGE</h4>
                    <form action="">
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Email'/>
                        <input type="text" placeholder='Website'/>
                        <textarea name="" id="" placeholder='Comment'></textarea>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <div className="col-2">
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28021.017145527097!2d77.37350496306512!3d28.61096039445677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff8b3fce379%3A0x1e2b12bbf7a6abba!2sAcoWorlds%20Technology%20Pvt%20Ltd%20Top%20Leading%20Startup%20Eco%20hub%20in%20india!5e0!3m2!1sen!2sin!4v1743148001053!5m2!1sen!2sin" width="100%" height="550" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


