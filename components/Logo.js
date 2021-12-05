import Link from 'next/link'
import styles from '../styles/Logo.module.css'

export const Logo = (props) => {
    return (
        <div className={styles.logoWrapper}><Link href='/'><a>
            <h1 className={props.orientation}>ALEX OGDEN CLARK</h1></a></Link>
        </div>
    )
}
