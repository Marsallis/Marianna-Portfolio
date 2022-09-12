import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hb6sk0n', 'template_1y7xcfp', form.current, 'user_MhALOydxXsOTWuFXrzYkx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form-container' id="form-ctnr">
        <div className='form1'>
            <form ref={form} onSubmit={sendEmail}>
                <section className='form-section1'>
                    <div className="form-header">
                        <h2>Let's Chat!</h2>
                    </div>
                    <div className='form-name'>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className='form-brand'>
                        <label>Brand Name</label>
                        <input type="text" name="user_brand" /> 
                    </div>
                    <div className='form-email'>
                        <label>Email</label>
                        <input type="email" name="user_email" /> 
                    </div>
                </section>
                <section className='form-message-btn'>
                    <div className='form-message'>
                        <label>Message</label>
                        <div className='form-message-input'>
                            <textarea name="message"/>
                        </div>
                        <div className="form-btn-div">
                            <button className='form-butn' type="submit" value="Submit">SUBMIT</button>
                        </div>
                    </div>
                </section>
                
                
            </form>
        </div>
    </div>
    
  );
};

export default ContactUs;