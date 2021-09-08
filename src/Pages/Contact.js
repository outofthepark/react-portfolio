import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact Me</h1>
          <div className="contact-form-section">
            <input type="text" name="name" placeholder="Your name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="contact-form-section">
            <input type="email" name="email" placeholder="Your email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="contact-form-section">
            <textarea name="message" rows="5" placeholder="Let me know what youre thinkinig!" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div className="contact-form-section">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
  
  export default Contact;