import { styled } from "styled-components";
import "./Banner.css"
import { LogoPrincipal } from "../Logo/Logo";
import { Outlet } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useGetVideo from "../Hooks/useGetVideo";
import React from "react";
import { urlProduto } from "../context/GetUrl";


const VideoBanner = styled.section`
`;
const BannerContainer = styled.div`
  position: relative;

`;
const BannerDiv = styled.div`
  `;
const BannerInicial = styled.img`

  width: 100%;
  height:40vh;
  flex-wrap: nowrap;
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
    rgba(0, 0, 0,1) 0%,
    rgba(0, 0, 0, 0.9) 10%, 
    rgba(0, 0, 0, 0.8) 20%,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.4) 40%,
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

  const produtosData = useGetVideo(urlProduto);
  const { data: produtos, loading: loadingProdutos, error: errorProdutos } = produtosData;

  if (loadingProdutos) {
    return <div>Loading...</div>;
  }

  if (errorProdutos) {
    return <div>Error fetching data.</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    fade: 2000, 
    cssEase: "linear",
    arrows: false,
  };


    return (
        <VideoBanner>
            <BannerContainer>
                <Slider {...settings}>

             { produtos.map
             ((produto) => (
                <BannerDiv key={produto.id}>
                  <BannerGradient />
                    <BannerInicial src={produto.img} alt={produto.name} />
                </BannerDiv>
                )) }

                </Slider>
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


