import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {

  const [userEmail, setUserEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const form = useRef();
  const validEmail = /\S+@\S+\.\S+/;

  const handleEmailInput = (value) => {
    setUserEmail(value)
    setTimeout(
      checkForValidEmail() ? setIsValidEmail(true) : setIsValidEmail(false), 500)
  }

  const checkForValidEmail = () => {
   return validEmail.test(userEmail)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validEmail.test(userEmail)){
      console.log('no')
    }

  else emailjs
      .sendForm(
        'service_hftktmk',
        'template_q4xhk91',
        form.current,
        'user_c5YSvfSUD4bL7XgLE4dTp'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        Fill in the contact form and press submit, Alex will get back to you
        ASAP!
      </div>
      <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
        <div className={styles.nameAndEmail}>
          <TextField
          
            className={styles.textField}
            name="user_name"
            required
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            color="warning"
            sx={{
              margin: 1,
            }}
          />
          <TextField
            onChange={(e) => handleEmailInput(e.target.value)}
            className={styles.textField}
            data-key='email'
            required
            name='user_email'
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            color={isValidEmail ? 'warning' : 'error'}
            sx={{
              margin: 1,
            }}
          />
        </div>{' '}
        <div className={styles.messageAndSubmit}>
          {' '}
          <TextField
            required
            id="outlined-multiline-static"
            name='message'
            label="Message"
            multiline
            rows={6}
            color="warning"
            sx={{
              margin: 1,
            }}
            fullWidth
          />
          <button className={styles.submitButton} type="submit">
            Send
          </button>{' '}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
