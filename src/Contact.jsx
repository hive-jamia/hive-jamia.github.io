import React from "react";
import ContactContent from "./ContactContent"
import ContactBanner from "./ContactBanner";

const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactContent/>
      <br/><br/>
    </div>
  );
};

export default Contact;