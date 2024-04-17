import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'


    function Presentation(){
        const [text, setText] = useState('');
        const toRotate = ['Olá!', 'Eu sou o Mateus Simões!', 'Sou Desenvolvedor Front End', 'Este é meu portfólio'];
        const [loop, setLoop] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const period = 200;
        const [delta, setDelta] = useState(50)

        useEffect(()=>{
            let ticker = setInterval(()=>{
                toType()
            }, delta)
            return()=> {clearInterval(ticker)}

        }, [text])

         const toType = () => {
            let i = loop % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring (0, text.length+1);

            setText(updatedText);

            if(!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period)
            }else if(isDeleting && updatedText === ''){
                setIsDeleting(false);
                setDelta(period);
                setLoop(loop+1);
            }
         }

    return(
        <div id='Presentation' className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>{text}</h1>
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