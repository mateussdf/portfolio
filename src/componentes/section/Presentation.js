import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
function Presentation(){
    return(
        <div id='Presentation' className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Mateus Simões!</h1>
            <p>
                Sou estudante de programação no curso de Tecnologia<br/>
                da Escola DNC, em busca de migração para a área de desenvolvimento.<br/>
                Autodidata e curioso por hobby, sempre em busca de desafios que possam <br/>
                me desenvolver profissional e pessoalmente e que possibilitem<br/>
                deixar minha marca registrada no mundo, ou por onde eu passar.
            </p>
            <ButtonA link='https://github.com/mateussdf' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation