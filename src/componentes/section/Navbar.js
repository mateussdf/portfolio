import styles from './Navbar.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/msimoesdf/'><FaInstagram size={40}/></a></li>
                <li><a href='https://www.linkedin.com/in/mateus-sim%C3%B5es-878674153/'><FaLinkedin size={40}/></a></li>
                <li><a href='https://github.com/mateussdf'><FaGithub size={40}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar