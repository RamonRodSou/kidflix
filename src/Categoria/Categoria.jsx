import { styled } from "styled-components";
import Produto from "../Produto/Produto";


const VideosSec = styled.section`

    display:flex;
    flex-direction:column;
`;


const VideosDiv = styled.div`
    display:flex;
    gap:0.5rem;
    margin:0 1rem;

`;

const TituloSec = styled.h1`

    margin: 0.5rem 1rem;
    color: #ffffff;
    font-size:1rem;
    font-weight:700;
    text-shadow: 2px 3px 5px black;


    `;

export default function Categoria () {

    return (
        <VideosSec>
            <TituloSec>Desenhos</TituloSec>
            <VideosDiv>
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
            </VideosDiv>
        </VideosSec>
        
    )
}