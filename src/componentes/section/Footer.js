import styles from './Footer.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/msimoesdf/'><FaInstagram size={40}/></a></li>
                <li><a href='https://www.linkedin.com/in/mateus-sim%C3%B5es-878674153/'><FaLinkedin size={40}/></a></li>
                <li><a href='https://github.com/mateussdf'><FaGithub size={40}/></a></li>
            </ul>
            <p>msimoes509@outlook.com</p>
            <p> Mateus Simões © 2024</p>

        </div>
    )
}

export default Footer