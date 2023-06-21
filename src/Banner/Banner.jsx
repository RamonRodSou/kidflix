import { styled } from "styled-components";
import ImgBanner from "../Banner/Banner.jpg";
import React from "react";
import { LogoPrincipal } from "../Logo/Logo";


const VideoBanner = styled.div`
    position: absolute;
    top:0;
    z-index: -1;

`;

const BannerInicial = styled.img`
    width: 100vw;
    height:50vh;

    @media (min-width: 768px) {

        height:80vh;

    }
`;

const LogoMeio = styled.div`

    position: absolute;
    top:80%;
    display:flex;
    left:50%;
    margin-left:-40px;

`;


export function Banner () {

    return (
        <VideoBanner>
            <BannerInicial src={ImgBanner} alt={ImgBanner}/>
            <LogoMeio>
                <LogoPrincipal/>
                <p>Desenhos</p>
            </LogoMeio>

        </VideoBanner>
    )
}


