import React from "react";
import './Contact.css';

const ContactContent = () => {

  return (
    <div className="center">
  <div className="container">
  
      <h1 className="title">Contact Us <span>☝️</span></h1>
    
      <div className="form form__1">
        <label for="name" className="form__label">Full name</label>
        <input type="text" className="form__input" name="fname" placeholder="" id="name" required/>
      </div>
    
      <div className="form form__2">
        <label for="email" className="form__label">Email address</label>
        <input type="email" className="form__input" name="email" placeholder="" id="email" required/>
      </div>
    
      <div className="form form__3">
        <label for="message" className="form__label">Your message</label>
        <input type="text" className="form__input" placeholder="" name="message" id="message" required/>
      </div>
    
      <button className="form__btn">
        <span className="form__btn--visible"><p>Submit</p> 
          <i className="material-icons">{"-->"}</i>
        </span>
        <span className="form__btn--invisible">Message sent!</span>
      </button>
  
    <div className="container-mail">
      <div className="mail">
        <div className="mail__back"></div>
        <div className="mail__top"></div>
        <div className="mail__letter">
          <div className="mail__letter-square">
          </div>
          <div className="mail__letter-lines">
          </div>
        </div>
        <div className="mail__left"></div>
        <div className="mail__right"></div>
        <div className="mail__bottom"></div>
      </div>
    </div>
    
  </div>
</div>
  );
};

export default ContactContent;