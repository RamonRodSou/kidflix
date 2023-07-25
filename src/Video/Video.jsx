import { styled } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { ChakraProvider } from "@chakra-ui/react";
import ImgplayPng from './play.png'
import AbrirModalVideo from "../AbrirModal/AbrirModalVideo";



const VideosDiv = styled(motion.div)`

    display:flex;
    flex-wrap: wrap;
    justify-content: center;


    gap:0.5rem;
    margin:5rem 0 0 0;
    width:100%;
`;
const VideoProduto = styled(motion.div)`
    width:90px;
    min-width:90px;
    height: 120px;
    min-height: 120px;
    position:relative;
    margin-bottom: 1rem;

`;

const ImgVideo = styled.img`
    
    min-width:100%;
    min-height:100%;
    height:120px;
    border-radius: 5px;
    pointer-events:none;
    
`;

const ImgPlay = {
    width:'40px',
    position: 'absolute',
    top: '35%',
    left: '30%',
    cursor:'pointer',
    
}


const TituloVideo = styled.p`
    position: relative;
    bottom:0 ;
    margin:0;

    background-color:#FF4C4C;
    border-radius:2px;
    color: #FFFFFF;
    text-shadow: 2px 3px 5px black;
    text-align:center;

    font-size:10px;
    font-weight: 400;
    text-shadow: 2px 3px 5px black, -1px -2px 5px black;

`;

export default function Videos ({categoria, style}) {

    const [produtos, setProdutos] = useState([]);
    const [width, setWidth] = useState(0)
    const carrosel = useRef({})
  
    useEffect(() => {
    
        const fetchData = async () => {
            try {
            // const responseProdutos = await axios.get('http://localhost:3001/produto/');
            const responseProdutos = await axios.get('https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/produto/');

            setProdutos(responseProdutos.data);

            console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
            setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    
            } catch (error) {
            console.error('Erro ao obter os dados do JSON:', error);
            alert('Erro no Categoria.jsx.');
            }
        };
  
      fetchData();
    }, []);

    const getYouTubeID = (url) => {
      const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
      const match = url.match(regex);
    
      return match ? match[1] : "";
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
    