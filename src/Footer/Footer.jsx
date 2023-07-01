import { styled } from "styled-components";


const FooterSec = styled.section`

    display:flex;
    justify-content: center;
`;

export default function Footer () {

    return (

        <FooterSec>
            <p class="footer__nome">Desenvolvedor Ramon Rodrigues 2023</p>
        </FooterSec>
    )
}