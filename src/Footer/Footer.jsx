import { styled } from "styled-components";


const FooterSec = styled.section`

    display:flex;
    justify-content: center;
    padding:1rem 0 ;
    margin:2rem 0 0 0;
    background-color:red;
    color:#fff;
`;

export default function Footer () {

    return (

        <FooterSec>
            <p>Desenvolvedor Ramon Rodrigues 2023</p>
        </FooterSec>
    )
}