import React, { useState } from 'react'
import { Spring } from 'react-spring/renderprops';
import ReCAPTCHA from "react-google-recaptcha";
import { Wrapper } from './ContactFormCSS';

import { useHistory } from 'react-router-dom';



const ContactForm = () => {

  let history = useHistory();

  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
    captcha: null
  });

  function onCaptchaChange(value) {
    setForm({
      ...form,
      captcha: value,
    });
  }

  const handleInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/send', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => {
      return res.json();
    }).then((data)=>{
      // console.log(data.msg);
      if(data.success === true){
        alert('mail was sent successfully');
        history.push('/');
        
        history.push("/");
        
      } else if (data.success === false){
        alert(data.msg);
      }
      return
    })

  }

  return (
    <Spring
      delay={700}
      from={{opacity: 0}}
      to={{ opacity: 1}}
    >
    {props => 
      <Wrapper style={props}>
        <div className="container">
            
          <h1 className="header">Contact form</h1>

            <div className="contact">
              <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" id="name" onChange={handleInputChange} />
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" name="subject" id="subject" onChange={handleInputChange} />
                </div>
                <div>
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" name="email" id="email" onChange={handleInputChange} />
                </div>
                <div>
                  <label>Message</label>
                  <textarea name="message" onChange={handleInputChange} rows="5"></textarea>
                </div>
                <ReCAPTCHA
                  sitekey="xxx"
                  onChange={onCaptchaChange}
                />
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
              
            </div>

        </div>
      </Wrapper>
    }
    </Spring>
  )
}

export default ContactForm
