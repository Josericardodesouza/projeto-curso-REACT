import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.footer}>
                    <FaFacebook />
                </li>
                <li className={styles.footer}>
                    <FaInstagram />
                </li>
                <li className={styles.footer}>
                    <FaLinkedin />
                </li>

            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2024
                </p>
        </footer>

    )
}

export default Footer