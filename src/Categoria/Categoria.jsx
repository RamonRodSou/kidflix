import { styled } from "styled-components";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';

const CategoriaVideo= styled(motion.section)`

  display:flex;
  flex-direction:column;

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
    min-width:900px
`;

const TituloSec = styled.h1`

    margin: 0.5rem 1rem;
    color: #ffffff;
    font-size:1rem;
    font-weight:700;
    text-shadow: 2px 3px 5px black;

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
    border-radius: 5px;
    pointer-events:none;
    
`;

const ImgPlay = styled.img`
    width:30px;
    position: absolute;
    top: 40%;
    left: 30%;
    cursor:pointer;
    
`;

const LinkPlay = styled.a`
    cursor:pointer;
`;

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

export default function Categoria () {

    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [width, setWidth] = useState(0)
    const carrosel = useRef({})

    const getVideosDivWidth = (numVideos) => {
      const videoWidth = 110; 
      const numVideosToShow = Math.min(numVideos);
      const total = numVideosToShow * videoWidth;

      console.log(total)

      return total;
    
    };
    

    useEffect(() => {
    
        const fetchData = async () => {
            try {
            const responseCategorias = await axios.get('http://localhost:3001/categoria');
            setCategorias(responseCategorias.data);

            // console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
            // setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    
            
            const responseProdutos = await axios.get('http://localhost:3001/produto');
            setProdutos(responseProdutos.data);
            } catch (error) {
            console.error('Erro ao obter os dados do JSON:', error);
            alert('Ocorreu um erro na conexão com o servidor.');
            }
        };
  
      fetchData();
    }, []);

    return (
        <CategoriaVideo>
        {categorias.map((categoria) => (
          <VideosSec 
                    key={categoria.id}
                    ref={carrosel}
                    whileTap={{ cursor: 'grabbing' }}
          >
            <TituloSec key={categoria.id}>{categoria.categoriaName}</TituloSec>
            <VideosDiv
                drag='x' 
                dragConstraints={{ right: 0, left: -width }}
                dragElastic={0.8} // Adicionando a propriedade dragElastic
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ minWidth: getVideosDivWidth(
                  produtos.filter((produto) => produto.categoria === categoria.categoriaName).length)}}
            >
              {produtos
                .filter((produto) => produto.categoria === categoria.categoriaName)
                .map((produto) => (
                  <VideoProduto key={produto.id}>
                    <ImgVideo src={produto.img} alt={produto.name} />
                    <TituloVideo>{produto.name}</TituloVideo>
                    <LinkPlay title={produto.name} src={produto.video} width="560" height="315" frameBorder="0" allowFullScreen></LinkPlay>
                  </VideoProduto>
                ))}
            </VideosDiv>
          </VideosSec>
        ))}
      </CategoriaVideo>
    );
  };
  