import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div 
      className="leftSide"
      style={{ backgroundImage: `url(${PizzaLeft})`}}>

      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text"/>

            <label htmlFor="email">E-mail</label>
            <input name="email" type="text"/>

            <label htmlFor="message">Message</label>
            <textarea rows="6" type="text" name="message" required />
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
