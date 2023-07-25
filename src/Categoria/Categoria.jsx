import { styled } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { ChakraProvider, Flex } from "@chakra-ui/react";
import LinkNav from "../LinkNav/LinkNav";
import ImgplayPng from './play.png'
import AbrirModalVideo from "../AbrirModal/AbrirModalVideo";


const CategoriaVideo= styled(motion.section)`

  display:flex;
  flex-direction:column;
  background-color:black;

`;
const VideosSec = styled(motion.div)`

    display:flex;

    flex-direction:column;
    overflow: hidden;
    cursor:grab;
    width:100%;

`;

const VideosDiv = styled(motion.div)`

    display:flex;
    gap:0.5rem;
    margin:0 1rem;
    width:100%;
    min-width:400px
`;

const TituloSec = styled.h1`

    color: #fff ;
    font-size:1rem;
    font-weight:700;
    text-shadow: 2px 3px 5px #fefefe, -1px -3px 5px #fefefe;

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
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    color: #FFFFFF;
    text-shadow: 2px 3px 5px black;
    text-align:center;

    font-size:10px;
    font-weight: 400;
    text-shadow: 2px 3px 5px black, -1px -2px 5px black;

`;

const VerTudo = {
  color: '#fff',
  fontSize:'0.5rem',
  textShadow: '2px 3px 5px #fefefe, -1px -3px 5px #fefefe',
  border:'1px solid #FFF ',
  borderRadius:"10px",
  padding:'5px',
  background: 'red'
}
export default function Categoria () {

    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [width, setWidth] = useState(0)
    const carrosel = useRef({})
    
    useEffect(() => {
    
        const fetchData = async () => {
            try {
            // const responseCategorias = await axios.get('http://localhost:3001/categoria/');
            const responseCategorias = await axios.get('https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/categoria/');
            setCategorias(responseCategorias.data)

            // const responseProdutos = await axios.get('http://localhost:3001/produto/');
            const responseProdutos = await axios.get('https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/produto/');
            setProdutos(responseProdutos.data)

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
        <CategoriaVideo>
        {categorias.map((categoria) => (
          <VideosSec 
                    key={categoria.id}
                    ref={carrosel}
                    whileTap={{ cursor: 'grabbing' }}
          >

            <Flex key={categoria.id} alignItems='center' justifyContent='space-between' margin='1rem 1rem 0.5rem' >
              <TituloSec >{categoria.categoriaName}</TituloSec>
              <LinkNav style={VerTudo} textShadow='#fefefe' to={categoria.categoriaName} >Ver Tudo</LinkNav>
            </Flex>

            <VideosDiv
                drag='x' 
                dragConstraints={{ right: 0, left: -width }}
                dragElastic={0.8}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
              {produtos
                .filter((produto) => produto.categoria === categoria.categoriaName)
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
          </VideosSec>
        ))}
      </CategoriaVideo>
    );
  };
  


  // Quando for na tela no PC a Imagem vai ser a Imagem do Proprio Video

//   Implemnentar isso no codigo

// const VideoProduto = styled(motion.div)`
// width:100px;
// min-width:200px;
// height: 200px;
// min-height: 120px;
// position:relative;
// margin-bottom: 1rem;

// `;

// const ThumbnailVideo = styled.img`
// min-width: 100%;
// min-height: 100%;
// border-radius: 5px;
// pointer-events: none;
// `;

// <ThumbnailVideo src={`https://img.youtube.com/vi/${getYouTubeID(produto.video)}/hqdefault.jpg`} alt={produto.name} />          