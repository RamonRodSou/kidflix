import {    Modal,
            ModalOverlay,
            ModalContent,
            ModalHeader,
            ModalFooter,
            ModalBody,
            ModalCloseButton,
            Button,
            FormControl,
            FormLabel,
            Input,
            Box,
            Select,
            Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { isValidImageUrl, isValidName, isValidYouTubeUrl } from "../context/validacaoFunction";

export default function ModalComp ({dataEdit,isOpen,onClose}) {
   
    const [name, setName] = useState(dataEdit.name || "");
    const [img, setImg] = useState(dataEdit.img || "");
    const [video, setVideo] = useState(dataEdit.video || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");
    const [categoria, setCategoria] = useState(dataEdit.categoria || "");
    const [categoriaName, setCategoriaName] = useState(dataEdit.categoria || "");

    const [categorias, setCategorias] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [notVisible, setNotVisible] = useState(false);

    const [categoriaError, setCategoriaError] = useState("");

    const [errorMessages, setErrorMessages] = useState({
        name: "",
        img: "",
        video: "",
        categoria: "",
      });

    const [widthResponse, setWidthResponse] = useState('90%')

    
    const validateForm = () => {
    let isValid = true;
    const newErrorMessages = {};

    if (!name) {
        newErrorMessages.name = "Campo obrigatório.";
        isValid = false;
    } else if (!isValidName(name)) {
        newErrorMessages.name = "Nome deve conter no mínimo 3 letras e no máximo 15.";
        isValid = false;
    }

    if (!img) {
        newErrorMessages.img = "Campo obrigatório.";
        isValid = false;
    } else if (!isValidImageUrl(img)) {
        newErrorMessages.img = "URL de imagem inválida.";
        isValid = false;
    }

    if (!video) {
        newErrorMessages.video = "Campo obrigatório.";
        isValid = false;
    } else if (!isValidYouTubeUrl(video)) {
        newErrorMessages.video = "URL de vídeo inválida.";
        isValid = false;
    }

    if (!descricao) {
        newErrorMessages.descricao = "Campo obrigatório.";
        isValid = false;
        }else if (!isValidName(descricao)) {   
        newErrorMessages.descricao = "Descricao deve conter no mínimo 3 letras e no máximo 15.";
        isValid = false;
    }

    if (!categoria) {
        setCategoriaError("Escolha uma categoria válida.");
        return;
        }

    setErrorMessages(newErrorMessages);
    return isValid
    };
          
    const validateNewCategoria = () => {

        let isValid = true;
        const newErrorMessages = {};
        
        if (!categoriaName) {
            newErrorMessages.categoriaName = "Campo obrigatório.";
            isValid = false;
          }else if (!isValidName(categoriaName)) {
              newErrorMessages.categoriaName = "Categoria deve conter no mínimo 3 letras e no máximo 15.";
              isValid = false;
        }

        setErrorMessages(newErrorMessages);
        return isValid
  
    }
    //const url = 'http://localhost:3001/produto/'
    //const urlCategoria = 'http://localhost:3001/categoria '

    const url = 'https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/produto/'
    const urlCategoria = 'https://my-json-server.typicode.com/RamonRodSou/AluraFlixdb/categoria/'

    const Post = () => {
        
        if (validateForm()) {

        const dadosVideo = {
            
            name: name,
            img: img,
            video: video,
            descricao: descricao,
            categoria:categoria
        }
        
        axios.post(url, dadosVideo)

        .then(() =>{
            alert(name + ' adicionado com sucesso na categoria ' + categoria)
            onClose()
            })
        .catch(error => console.log(error))
    }
    };

    const PostNovaCategoria = () => {

        if(validateNewCategoria()){     
            
        const dadosCategoria = {
            categoriaName: categoriaName,
        }

        axios.post(urlCategoria, dadosCategoria)

        .then(()=>{
            alert(categoriaName + ' adicionada com sucesso')
            onClose()
        })
        .catch(error => console.log(error))}
    }

    const applyResponsiveStyles = () => {

        if (window.innerWidth >= 1465) {
          setWidthResponse("40%");
        } 
    
        else if (window.innerWidth >= 1247) {
          setWidthResponse("50%");
    
        } 
        else if (window.innerWidth >= 768) {
          setWidthResponse("80%");
        } 
        else {
          setWidthResponse("90%");
        }
      };

    useEffect(() => {

        const fetchData = async () => {
            try {
            const responseCategorias = await axios.get(urlCategoria);

            setCategorias(responseCategorias.data);

            } catch (error) {
            console.error('Erro ao obter os dados do JSON:', error);
            alert('Erro no Modal.');
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

    function NovaCategoria () {
        setIsVisible(!isVisible);
        setNotVisible(!notVisible);
    }
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
            <ModalOverlay       
                bg='none'
                backdropFilter='blur(3px)'
                zIndex="modalOverlay"
            />
                <ModalContent maxW={widthResponse}>
    {isVisible &&<ModalHeader>Novo Video</ModalHeader>}
    {notVisible &&<ModalHeader>Nova Categoria</ModalHeader>}
                    <ModalCloseButton/>
                    <ModalBody>
        {isVisible &&   <FormControl
                                display="flex" 
                                flexDir="column" 
                                gap={4}>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input 
                                    type="name"
                                    value={name} 
                                    placeholder="Nome do vídeo"
                                    onChange={(event) => setName(event.target.value)}
                                />
                                {errorMessages.name && (
                                    <Text color="red" fontSize="sm">
                                    {errorMessages.name}
                                    </Text>
                                )}
                            </Box>
                            <Box>
                                <FormLabel>Imagem </FormLabel>
                                <Input type="url"
                                    value={img}
                                    placeholder="Link da imagem"
                                    onChange={(event) => setImg(event.target.value)}
                                />
                                {errorMessages.img && (
                                    <Text color="red" fontSize="sm">
                                    {errorMessages.img}
                                    </Text>
                                )}
                            </Box>
                            <Box>
                                <FormLabel>Video</FormLabel>
                                <Input type="url"
                                    value={video}
                                    placeholder="Link do Youtube"
                                    onChange={(event) => setVideo(event.target.value)}
                                />
                                {errorMessages.video && (
                                    <Text color="red" fontSize="sm">
                                    {errorMessages.video}
                                    </Text>
                                )}
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Input type="text"
                                    value={descricao}
                                    placeholder="Descrção do vídeo"
                                    onChange={(event) => setDescricao(event.target.value)}
                                />
                            {errorMessages.descricao && (
                                <Text color="red" fontSize="sm">
                                {errorMessages.descricao}
                                </Text>
                            )}
                            </Box>
                            <Box>
                                <FormLabel>Categoria</FormLabel>
                                <Select 
                                    placeholder='Escolha uma Categoria' 
                                    size='md' 
                                    variant='outline'
                                    bg='tomato'
                                    borderColor='tomato'
                                    color='black'
                                    onChange={(event) => {
                                        setCategoria(event.target.value);
                                        setCategoriaError(""); 
                                      }}
                                >
                                {categorias
                                    .map(categoria => 
                                        <option 
                                            key={categoria.id}
                                            value={categoria.categoriaName} 
                                        >
                                            {categoria.categoriaName}
                                        </option>)}
                                </Select>
                                {categoriaError && <Text color="red" fontSize="sm">{categoriaError}</Text>}
                            </Box>
                        </FormControl>}
        {notVisible &&   <FormControl 
                                display="flex" 
                                flexDir="column" 
                                gap={4}>
                            <Box>
                                <FormLabel>Nova Categoria</FormLabel>
                                <Input 
                                    type="text"
                                    value={categoriaName}
                                    placeholder="Nova Categoria"
                                    onChange={(event) => setCategoriaName(event.target.value)}
                                />
                            {errorMessages.categoriaName && (
                                <Text color="red" fontSize="sm">
                                {errorMessages.categoriaName}
                                </Text>
                            )}
                            </Box>
                        </FormControl>}
                    </ModalBody>
                    <ModalFooter justifyContent="start">
        {isVisible &&   <Button type="submit" colorScheme="green" mr={2} onClick={Post} >  
                            Salvar
                        </Button>}
                        <Button colorScheme="red" mr={2} onClick={onClose}>
                            Cancelar
                        </Button>
        {isVisible &&   <Button colorScheme="blue" mr={2} onClick={NovaCategoria}>
                            Nova Categoria
                        </Button>}
        {notVisible &&   <Button type="submit" colorScheme="green" mr={2} onClick={PostNovaCategoria} >
                            Salvar
                        </Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )   
}