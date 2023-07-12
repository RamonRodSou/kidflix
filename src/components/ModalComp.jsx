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
} from "@chakra-ui/react";
import { useState } from "react";

export default function ModalComp ({data,setData,dataEdit,isOpen,onClose}) {
   
    const [name, setName] = useState(dataEdit.name || "");
    const [img, setImg] = useState(dataEdit.img || "");
    const [video, setVideo] = useState(dataEdit.video || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");

    function handleSave () {
        if(!name || !video) return;

        if(videolAlreadyExists()) {
            return alert("Video já foi adicionado")
        }
        if(Object.keys(dataEdit).length){
            data[dataEdit.index] = {name, img, video, descricao}
        }

        const newDataArray = !Object.keys(dataEdit).length
            ? [...(data ? data : []), {name, img, video, descricao}]
            : [...(data ? data : [])]

        localStorage.setItem("video", JSON.stringify(newDataArray))

        setData(newDataArray)
        onClose()
    }

    function videolAlreadyExists() {
        if (dataEdit.video !== video && data?.length){
            return data.find((item) => item.video === video)
        }
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent maxW="90%">
                    <ModalHeader>Add Video</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl display="flex" flexDir="column" gap={4}>
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text"
                                       value={name}
                                       onChange={(event) => setName(event.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Link Imagem </FormLabel>
                                <Input type="url"
                                       value={img}
                                       onChange={(event) => setImg(event.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Link Video Youtube</FormLabel>
                                <Input type="url"
                                       value={video}
                                       onChange={(event) => setVideo(event.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Input type="text"
                                       value={descricao}
                                       onChange={(event) => setDescricao(event.target.value)}
                                />
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter justifyContent="start">
                        <Button colorScheme="green" mr={3} onClick={handleSave}>
                            Salvar
                        </Button>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )   
}