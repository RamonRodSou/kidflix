import { styled } from "styled-components";


const FooterSec = styled.section`

    display:flex;
    justify-content: center;
    margin-top: 2rem;
    padding:1rem 0 ;
    background-color:red;
    color:#fff;
`;

export default function Footer () {

    return (

        <FooterSec>
            <p class="footer__nome">Desenvolvedor Ramon Rodrigues 2023</p>
        </FooterSec>
    )
}