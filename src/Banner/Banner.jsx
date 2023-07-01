import { styled } from "styled-components";
import "./Banner.css"
import ImgBanner from "../Banner/Banner.jpg";
import React from "react";
import { LogoPrincipal } from "../Logo/Logo";


const VideoBanner = styled.div`

    z-index: -1;

`;

const BannerInicial = styled.img`
    width: 100vw;
    height:40vh;

    @media (min-width: 768px) {

        height:80vh;

    }
`;

const LogoMeio = styled.div`

    position: absolute;
    top:32vh;
    z-index: 1;

    color: #ffffff;
    text-shadow: 2px 3px 5px black;
    display:flex;
    align-items: center;
    gap:0.5rem;

    left:50%;
    margin-left:-40px;
`;
  

const Titulo = styled.p`

    text-shadow: 2px 3px 5px black;
    font-weight: 400;

`;

export function Banner () {

    return (
        <VideoBanner>
            <BannerInicial src={ImgBanner} alt={ImgBanner}/>
            <LogoMeio>
                <LogoPrincipal
                    className="LogoBannerCss"
                />
                <Titulo>Desenhos</Titulo>
            </LogoMeio>

        </VideoBanner>
    )
}


