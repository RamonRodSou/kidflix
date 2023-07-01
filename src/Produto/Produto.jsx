import { styled } from "styled-components";
import Play from "./play.png"

const VideoProduto = styled.div`
    width:1000px;
    height: 120px;
    position:relative;
    margin-bottom: 1rem;

    
`;

// const Video = styled.iframe`
    
//     width:100%;
// `;


const ImgVideo = styled.img`
    
    width:100%;
    height:100%;
    border-radius: 5px;
    
`;

const ImgPlay = styled.img`
    width:30px;
    position: absolute;
    top: 40%;
    left: 30%;
    cursor:pointer;
    
`;

const TituloVideo = styled.p`
    position: absolute;
    left: 25%;
    bottom:0 ;
    margin:0;
    color: #FFFFFF;
    text-shadow: 2px 3px 5px black;
    font-weight: 400;
    text-shadow: 2px 3px 5px black, -1px -2px 5px black;

`;


export default function Produto () {
    return (
        <VideoProduto>
            <ImgVideo src="https://i.playboard.app/p/AATXAJxwkWMfy1LzJShafcqneZhm91Pqs-FiGppnkna7/default.jpg" alt="Video"/>
            {/* <Video src="https://www.youtube.com/embed/QMGxuFiHq6Q" title="Cuidando dos Nossos Amigos Peludos 🐶🐱🐾 e mais musicas infantis de Cleo e Cuquin - Família Telerín" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video> */}
            <ImgPlay src={Play} alt={Play}></ImgPlay>
            <TituloVideo>Kukin</TituloVideo>
        </VideoProduto>
        
    )

}   