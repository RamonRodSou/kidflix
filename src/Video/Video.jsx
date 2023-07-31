import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { ChakraProvider } from "@chakra-ui/react";
import ImgplayPng from './play.png'
import AbrirModalVideo from "../AbrirModal/AbrirModalVideo";

const VideosDiv = styled(motion.div)`
    
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-wrap: wrap;
    align-items:center;
    margin:5rem 0 0 0;
    gap:1rem;
    width:100%;
`;
const VideoProduto = styled(motion.div)`
    width:90px;
    min-width:90px;
    height: 120px;
    min-height: 120px;
    position:relative;
    margin: 1.5rem 0;

    @media (min-width: 768px) {
    
      width:150px;
      min-width:150px;
      height: 200px;
      min-height: 200px;
      
    }
  
    @media (min-width: 1024px) {
      
      width:250px;
      min-width:250px;
      height: 300px;
      min-height: 300px;
      
    }
  
`;

const ImgVideo = styled.img`
    
min-width:100%;
min-height:100%;
height:120px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
pointer-events:none;
    
`;

const TituloVideo = styled.p`
position: relative;
bottom:0 ;
margin:0;

background-color:#FF4C4C;
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
color: #FFFFFF;
text-shadow: 2px 3px 5px black;
text-align:center;

font-size:10px;
font-weight: 400;
text-shadow: 2px 3px 5px black, -1px -2px 5px black;


  @media (min-width: 768px) {
    
    font-size:1rem;
  }
  
  @media (min-width: 1024px) {
    
      font-size:1.5rem;
  }
`;

export default function Videos ({categoria}) {

    const [produtos, setProdutos] = useState([]);
    const [widthResponse, setWidthResponse] = useState('3.5rem')

    const applyResponsiveStyles = () => {

      if (window.innerWidth >= 1465) {
        setWidthResponse("6.5rem");
      } 

      else if (window.innerWidth >= 1247) {
        setWidthResponse("6.5rem");

      } 
      else if (window.innerWidth >= 768) {
        setWidthResponse("4.5rem");
      } 
      else {
        setWidthResponse("3.5rem");
      }
    };

    useEffect(() => {
    
        const fetchData = async () => {
            try {
            // const responseProdutos = await axios.get('http://localhost:3001/produto/');
            const responseProdutos = await axios.get('https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/produto/');

            setProdutos(responseProdutos.data);
            } catch (error) {
            console.error('Erro ao obter os dados do JSON:', error);
            alert('Erro no Categoria.jsx.');
            }
        };
  
      fetchData();

      applyResponsiveStyles();
    
      const handleResize = () => {
        applyResponsiveStyles();
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getYouTubeID = (url) => {
      const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
      const match = url.match(regex);
    
      return match ? match[1] : "";
    };

    const ImgPlay = {

      width:widthResponse,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform:' translate(-50%, -50%)',
      cursor:'pointer',
      
    };

    return (
          <VideosDiv>
              {produtos
              .filter((produto) => produto.categoria === categoria)
                .map((produto) => (
                  <VideoProduto key={produto.id}>
                    <ImgVideo src={produto.img} alt={produto.name} />
                      <ChakraProvider>
                        <AbrirModalVideo estilo={ImgPlay} videoId={getYouTubeID(produto.video)}>
                            <img src={ImgplayPng} alt='Imagem Play' style={ImgPlay}/>
                        </AbrirModalVideo>
                      </ChakraProvider>
                    <TituloVideo>{produto.name}</TituloVideo>
                  </VideoProduto>
                ))}
            </VideosDiv>
    );
  };
    