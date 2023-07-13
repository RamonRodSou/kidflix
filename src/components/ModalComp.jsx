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

export default function ModalComp ({dataEdit,isOpen,onClose}) {
   
    const [name, setName] = useState(dataEdit.name || "");
    const [img, setImg] = useState(dataEdit.img || "");
    const [video, setVideo] = useState(dataEdit.video || "");
    const [descricao, setDescricao] = useState(dataEdit.descricao || "");

    function dadosVideo () {
        console.log({ name, img, video,descricao});
   } 
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent maxW="90%">
                    <ModalHeader>Add Video</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl 
                                display="flex" 
                                flexDir="column" 
                                gap={4}
                        >
                            <Box>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text"
                                       value={name} 
                                       placeholder="Nome do vídeo"
                                       onChange={(event) => setName(event.target.value)}

                                />
                            </Box>
                            <Box>
                                <FormLabel>Imagem </FormLabel>
                                <Input type="url"
                                       value={img}
                                       placeholder="Link da imagem"
                                       onChange={(event) => setImg(event.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Video</FormLabel>
                                <Input type="url"
                                        value={video}
                                        placeholder="Link do Youtube"
                                        onChange={(event) => setVideo(event.target.value)}
                                />
                            </Box>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Input type="text"
                                       value={descricao}
                                       placeholder="Descrção do vídeo"
                                       onChange={(event) => setDescricao(event.target.value)}
                                />
                            </Box>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter justifyContent="start">
                        <Button colorScheme="green" mr={3} onClick={dadosVideo}>
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