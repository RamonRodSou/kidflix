import { styled } from "styled-components";
import React, { useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import ImgplayPng from './play.png'
import AbrirModalVideo from "../AbrirModal/AbrirModalVideo";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useGetVideo from "../Hooks/useGetVideo";
import ResponsiveStyle from "../Hooks/useEffect";
import { urlCategoria, urlProduto } from "../context/GetUrl";
import InfoIcon from '@mui/icons-material/Info';
import AbrirModalDescricao from "../AbrirModal/AbrirModaDescricao";

const CategoriaVideo= styled.section`

  display:flex;
  flex-direction:column;
  background-color:black;

  @media (min-width: 1024px) {
      
    // gap:3rem;
  }
`;
const VideosSec = styled.div`

  display:flex;

  flex-direction:column;
  overflow: hidden;
  cursor:grab;
  width:100%;

  @media (min-width: 1024px) {
    
    margin-bottom: 4rem;
  }
`;
const ProdutoContainer = styled.div`

  max-width: 115px;
  max-height: 300px; 

  @media (min-width: 450px) {

    max-width: 135px;
  }

  @media (min-width: 530px) {

    max-width: 165px;
  }

  @media (min-width: 650px) {

    max-width: 190px;
  }

  
  @media (min-width: 768px) {

    max-width: 210px;
  }

  @media (min-width: 1024px) {
      
  max-width: 250px;
  }
  
`;
const TituloSec = styled.h1`

  color: #fff ;
  font-size:1.5rem;
  font-weight:700;

  @media (min-width: 768px) {
    
    font-size:2rem;

  }

  @media (min-width: 1024px) {
    
    font-size:3rem;

  }
`;
const VideoProduto = styled.div`

  position:relative;
  margin-bottom: 1rem;
  padding: 0.5rem;

  @media (min-width: 450px) {

    height: 160px;
    min-height: 160px;
  }


  @media (min-width: 530px) {


    height: 200px;
    min-height: 200px;
  }

  @media (min-width: 768px) {
    
    width:190px;
    min-width:190px;
  }

  @media (min-width: 1024px) {
    
    width: 100%;
    height: 300px;
    min-height: 300px;
    

  }

`;
const ImgVideo = styled.img`
  
  min-width:100%;
  min-height:100%;
  height:130px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  pointer-events:none;
  opacity:0.5;

  @media (min-width: 768px) {
    
    height: 200px;
    
  }
  @media (min-width: 1024px) {
    
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
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
const LoadingMensagem = styled.span` 
  margin:1rem;
  color:#fff;
`;
const IconWrapper = styled.div`

  position: absolute;
  top: 8px;
  right: 8px;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2; /* Garante que o ícone fique à frente dos outros elementos */

`;

const getYouTubeID = (url) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
  const match = url.match(regex);

  return match ? match[1] : "";
};

export default function Categoria () {

    const [fontSize, setFontSize] = useState('1rem');
    const [widthResponse, setWidthResponse] = useState('3.5rem')
    const [videosNaTela, setVideosNaTela] = useState(3)


    const ImgPlay = {

      width:widthResponse,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform:' translate(-50%, -50%)',
      cursor:'pointer', 
      
    };
    const VerTudo = {
      color: '#fff',
      fontSize:fontSize,
      textShadow: '2px 3px 5px #fefefe, -1px -3px 5px #fefefe',
      border:'1px solid #FFF ',
      borderRadius:"10px",
      padding:'5px',
      background: 'red'
    };
    const SliderStyled = {
      display:'flex',
      padding:'0 1rem',
      overflow: 'hidden',
    };
    
    const applyResponsiveStyles = () => {

      if (window.innerWidth >= 1465) {
        setFontSize("1rem");
        setWidthResponse("6.5rem");
        setVideosNaTela(6);
      } 

      else if (window.innerWidth >= 1247) {
        setFontSize("1rem");
        setWidthResponse("6.5rem");
        setVideosNaTela(5);

      } 
      else if (window.innerWidth >= 768) {
        setFontSize("1rem");
        setWidthResponse("4.5rem");
        setVideosNaTela(4);
      } 
      else {
        setFontSize("0.5rem");
        setWidthResponse("3.5rem");
        setVideosNaTela(3);
      }
    };

    ResponsiveStyle(applyResponsiveStyles)

  
    const categoriasData = useGetVideo(urlCategoria);
    const produtosData = useGetVideo(urlProduto);

    const { data: categorias, loading: loadingCategorias, error: errorCategorias } = categoriasData;
    const { data: produtos, loading: loadingProdutos, error: errorProdutos } = produtosData;
  
    if (loadingCategorias || loadingProdutos) {
      return <LoadingMensagem>Loading...</LoadingMensagem>;
    }
  
    if (errorCategorias || errorProdutos) {
      return <div>Error fetching data.</div>;
    }

    return (
        <CategoriaVideo>
        {categorias.map((categoria) => (
          <VideosSec 
                    key={categoria.id}
          >
            <Flex key={categoria.id} alignItems='center' justifyContent='space-between' margin='1rem 1rem 0.5rem' >
              <TituloSec >{categoria.categoriaName}</TituloSec>
              <NavLink style={VerTudo}  to={categoria.categoriaName} >Ver Tudo</NavLink>
            </Flex>

            <Slider       
                  style={SliderStyled}
                  dots= {true}
                  infinite= {true}
                  speed= {500}
                  slidesToShow =  {Math.min(
                    produtos.filter((produto) => produto.categoria === categoria.categoriaName).length,
                    videosNaTela
                  )}
                  slidesToScroll={2}
                  arrows= {false}
              >
              {produtos
                .filter((produto) => produto.categoria === categoria.categoriaName)
                .map((produto) => (
                  <ProdutoContainer key={produto.id}>
                  <VideoProduto>
                    <ImgVideo src={produto.img} alt={produto.name} />
                      <ChakraProvider>
                        <AbrirModalDescricao descricao={produto.descricao} name={produto.name} idade={produto.idade}>
                          <IconWrapper>
                            <InfoIcon color="disabled"/>
                          </IconWrapper>
                        </AbrirModalDescricao>
                      <ChakraProvider>
                      </ChakraProvider>
                        <AbrirModalVideo estilo={ImgPlay} videoId={getYouTubeID(produto.video)}>
                            <img src={ImgplayPng} alt='Imagem Play' style={ImgPlay}/>
                        </AbrirModalVideo>
                      </ChakraProvider>
                    <TituloVideo>{produto.name}</TituloVideo>
                  </VideoProduto>
                  </ProdutoContainer>
                ))}
            </Slider >
          </VideosSec>
        ))}
      </CategoriaVideo>
    );
  };
  