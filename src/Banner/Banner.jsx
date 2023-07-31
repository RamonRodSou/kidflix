import { styled } from "styled-components";
import "./Banner.css"
import ImgBanner from "../Banner/Banner.jpg";
import React, { useEffect, useState } from "react";
import { LogoPrincipal } from "../Logo/Logo";
import { Outlet } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import { Button, ChakraProvider } from "@chakra-ui/react";
import AbrirModalVideo from "../AbrirModal/AbrirModalVideo";

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

const AssitirVideo = styled.div`

    position: relative;
    height: 0;

    top:-3rem;
    left:-1rem;

    color: #ffffff;

    display:flex;
    align-items: center;
    justify-content: flex-end;

`;



export function Banner () {

  const [imgBanner, setImgBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseImg = await axios.get("https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/produto/");
        setImgBanner(responseImg.data)

      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

 const getYouTubeID = (url) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
  
    return match ? match[1] : "";
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 400, 
    fade: 300, 
    cssEase: "linear",
    arrows: false,
  };

    return (
        <VideoBanner>
            <BannerContainer>
                {/* <BannerInicial src={ImgBanner} alt={ImgBanner} /> */}
                <Slider {...settings}>
             { imgBanner.map((item) => (
                 <BannerDiv key={item.id}>
                  <BannerGradient />
                    <BannerInicial src={item.img} alt={ImgBanner} />
                    <AssitirVideo>
                       <ChakraProvider>
                        <AbrirModalVideo videoId={getYouTubeID(item.video)}>
                          <Button 
                                  p="0.2rem 0.3rem" 
                                  bg="rgb(255, 0, 0)" 
                                  borderRadius="2px"
                                  color="#fff"
                          >
                            Assistir
                          </Button>
                        </AbrirModalVideo>
                        </ChakraProvider>
                    </AssitirVideo>
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


