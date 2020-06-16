import React, {useState} from 'react';
import { Wrapper } from './NewsletterCSS';

const Newsletter = () => {

  const [open, setOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    sub_name: '',
    sub_email: ''
  });


  const handleSubmit = () => {
    // need to check if NOT already subscribed
    
    alert(`${credentials.sub_name}, your email (${credentials.sub_email}) has been added to the subscription list!`);
  }

  const handleInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });

  }

  return (
    <Wrapper>
      <div className="container">

        <div className="outer">
          <div className="outer-left">
            <h1>Newsletter</h1>
            <p>Your email will not be shared with third parties.</p>
          </div>
          <div className="outer-right">
            <button onClick={()=>setOpen(true)}>Apply now</button>
          </div>
        </div>

        <div className={`inner ${open && 'inner-open'}`}>
          <div className="inner-left">
            <h1>Newsletter</h1>
            <label htmlFor="sub_name">Name</label>
            <input onChange={handleInput} type="text" id="sub_name" />
            <label htmlFor="sub_email">Email</label>
            <input onChange={handleInput} type="text" id="sub_email" />
          </div>
          <div className="inner-right">
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default Newsletter
