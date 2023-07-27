import { styled } from "styled-components";
import "./Banner.css"
import ImgBanner from "../Banner/Banner.jpg";
import React from "react";
import { LogoPrincipal } from "../Logo/Logo";
import { Outlet } from "react-router-dom";


const VideoBanner = styled.section`
`;

const BannerContainer = styled.div`
  position: relative;
`;

const BannerInicial = styled.img`
  width: 100%;
  height:40vh;
  word-wrap: break-word;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const BannerGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.6) 80%,
    rgba(0, 0, 0, 0.8) 90%,
    rgba(0, 0, 0, 1) 100%

  );
`;

const LogoMeio = styled.div`

    position: relative;
    height: 0;
    top:-2rem;
    color: #ffffff;
    text-shadow: 2px 3px 5px black;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:0.5rem;

`;
  

const Titulo = styled.p`

    text-shadow: 2px 3px 5px black;

    @media (min-width: 768px) {
      
      font-size:1.5rem;
        
      }
`;

export function Banner () {

    return (
        <VideoBanner>
            <BannerContainer>
                <BannerGradient />
                <BannerInicial src={ImgBanner} alt={ImgBanner} />
            </BannerContainer>
            <LogoMeio>
                <LogoPrincipal
                    className="LogoBannerCss"
                />
                <Titulo>KidFlix</Titulo>
            </LogoMeio>
            <Outlet/>
        </VideoBanner>
    )
}


