import { NavLink } from "react-router-dom";
import { styled } from "styled-components";


const FooterSec = styled.section`

    display:flex;
    justify-content: center;
    flex-direction: column;
    gap:2.5rem;
    padding:1rem 0 ;
    margin:2.5rem 0 0 0;
    background-color:#000;
    color:#fff;
`;

const Midias = styled.div`
    display:flex;
    gap:0.8rem;
    width:80%;
    margin: 0 2rem;
`;  

const MidiasImg = styled.img`
    width:25px;

`;

const Autor = styled.div`
    font-size:10px;
    margin:0 2rem;
`;

export default function Footer () {

    return (

        <FooterSec>
            <Midias>
                <NavLink to="https://www.linkedin.com/in/ramonrodsouza/">
                    <MidiasImg src='https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/LinkedIN_white.png' alt='Imagem LinkDin'/>
                </NavLink>
                <NavLink to="https://github.com/RamonRodSou">
                    <MidiasImg src='https://github.com/gauravghongde/social-icons/blob/master/PNG/White/Github_white.png?raw=true' alt='Imagem GitHub'/>
                </NavLink>
                <NavLink to="https://wa.me/5521972923210?text=Olá+Ramon+Rodrigues%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+aplicativos+e+páginas+web+para+meu+empreendimento."> 
                    <MidiasImg src='https://github.com/gauravghongde/social-icons/blob/master/PNG/White/WhatsApp_white.png?raw=true' alt='Imagem WhatsApp'/>
                </NavLink>
                <NavLink to="https://www.instagram.com/ramonrodsoul/">
                    <MidiasImg src='https://github.com/gauravghongde/social-icons/blob/master/PNG/White/Instagram_white.png?raw=true' alt='Imagem Instagram'/>
                </NavLink>
                <NavLink to="https://www.facebook.com/ramon.rodrigues.526875">
                    <MidiasImg src='https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/White/Facebook_white.svg' alt='Imagem Facebook'/>
                </NavLink>
            </Midias>

            <Autor>
               © Dev Ramon Rodrigues 2023 KidFlix, Inc.
            </Autor>
        </FooterSec>
    )
}