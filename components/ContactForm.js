import { TextField } from '@mui/material';
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
    return (
      <div className={styles.container}>
       
        <div className={styles.contactInfo}>Fill in the contact form and press submit, Alex will get back to you ASAP!</div>
        <form className={styles.contactForm}>
          <div className={styles.nameAndEmail}>
            <TextField
              className={styles.textField}  
              required
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              color="warning"
              sx={{
                margin: 1
              }}
            />
            <TextField
            className={styles.textField}   
              required
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              color="warning"
               sx={{
                margin: 1
              }}
            />
          </div>{' '}
          <div className={styles.messageAndSubmit}  >
            {' '}
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              color="warning"
               sx={{
                margin: 1
              }}
              fullWidth
            />
            <button className={styles.submitButton} type="submit">Send</button>{' '}
          </div>
        </form>
      </div>
    )
}


export default ContactForm