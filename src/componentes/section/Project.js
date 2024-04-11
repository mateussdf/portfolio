import styles from './Project.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lparq from '../../Image/projects/lparq.svg'
import dncw from '../../Image/projects/dncw.svg'
import ccxp from '../../Image/projects/ccxp.svg'

function Project(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card img={lparq} 
            title="LP - Arquitetura" 
            tech="HTML e CSS" 
            description="Projeto de desenvolvimento de uma landing page para escritório de arquitetura como estudo prático." 
            repo="https://github.com/mateussdf/desafiobasico-arquitetura" 
            site="https://desafiobasico-arquitetura.netlify.app/"/>

            <Card img={dncw} 
            title="DNC Weather" 
            tech="HTML, CSS e JS" 
            description="Desenvolvimento de uma página funcional com consumo de APIs para busca de CEP e temperatura, utilizando latitude e longitude." 
            repo="https://github.com/mateussdf/weatherdncmateus" 
            site="https://weatherdncmateus.netlify.app/"/>

            <Card img={ccxp} 
            title="Countdown CCXP" 
            tech="HTML, CSS e JS" 
            description="Desenvolvimento de página utilizando JS para funcionamento de uma countdown, a partir de uma data." 
            repo="https://github.com/mateussdf/CCXP" 
            site="https://ccxpmateus.netlify.app/"/>
            
            <ButtonB text='Acesse meu repositório completo' link='https://github.com/mateussdf?tab=repositories'/>
        </div>
    )
}

export default Project