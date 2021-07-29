import classes from './newsletter-registration.module.css';
import { useRef } from 'react';

function NewsletterRegistration() {

  const emailInputRef = useRef()

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const valid = (/^\w{3,}@[a-z]{5,8}.com$/).test(email);

    const body = {
      email 
    }

    fetch("api/newLetterRegistration",{
      method : "POST" ,
      body : JSON.stringify(body) ,
      headers : {
        'Content-Type' : "application/json"
      }
    })
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
