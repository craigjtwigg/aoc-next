import React from 'react'
import styles from '../styles/EmailError.module.css'
const EmailError = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.emailError}>
            <em className={styles.oops}>OOPS!</em>
    <p> It seems that you entered an invalid e-mail address!</p>
    <button onClick={()=> props.setShowError(false)} className={styles.button}>Try Again</button>
        </div>
        </div>
        
    )
}

export default EmailError