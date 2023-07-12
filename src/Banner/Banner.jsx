import { styled } from "styled-components";
import "./Banner.css"
import ImgBanner from "../Banner/Banner.jpg";
import React from "react";
import { LogoPrincipal } from "../Logo/Logo";
import { Outlet } from "react-router-dom";


const VideoBanner = styled.section`

`;

const BannerInicial = styled.img`

    width:100%;
    height:calc(100% - 65px);
    word-wrap:break-word;


    @media (min-width: 768px) {

        height:80vh;

    }
`;

const LogoMeio = styled.div`

    position: relative;
    height: 0;
    top:-1.5rem;
    color: #ffffff;
    text-shadow: 2px 3px 5px black;
    display:flex;
    align-items: center;
    justify-content: center;
    
`;
  

const Titulo = styled.p`

    text-shadow: 2px 3px 5px black;
    margin:0;

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
            <Outlet/>
        </VideoBanner>
    )
}


