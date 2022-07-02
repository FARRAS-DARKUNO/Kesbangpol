import React, { useEffect, useState } from "react"
import axios from "axios"
import '../style/fotoPage.css'
import { Card, Button, Image } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    AspectRatio
} from '@chakra-ui/react'
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ContainVideoPage = () => {
    const [recomendation, getRecomentdation] = useState(null)
    const [contain, getContain] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [linking, setlink] = useState(null)
    const [nameImage, setNameImage] = useState(null)


    let linkYoutube = 'https://www.youtube.com/embed/'

    const { slug } = useParams()


    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/video-gallery/" + slug)
            .then(function (response) {
                getContain(response.data.data)
                // console.log('masuk')
                // console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const setRecomendation = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2")
            .then(function (response) {
                getRecomentdation(response.data.data.data)
                // console.log('masuk baget')
                // console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        setContain()
        setRecomendation()
        return () => {
            getRecomentdation(null)
        }
    }, [slug])



    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{nameImage}</ModalHeader>
                    <ModalBody>
                        <AspectRatio maxW='560px' ratio={1}>
                            <iframe
                                title='naruto'
                                src={linkYoutube + linking}
                                allowFullScreen
                            />
                        </AspectRatio>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <div className="all-galery-foto-page">
                {
                    contain != null ?
                        <div className="title-galery-foto-Page">
                            {contain[0].name_gallery}
                        </div>
                        : <p>loading</p>
                }

                <div className="main-galery-foto-page">
                    <div className="contain-galery-foto">
                        <div className="galeri-card-foto">
                            {
                                contain != null ? contain.map((index) => (
                                    <Card style={{ width: '18rem' }} className='margin-foto' onClick={() => {
                                        console.log('astagfirullah')
                                        console.log(linkYoutube + index.video_url)
                                        setlink(index.video_url)
                                        setNameImage(index.description_per_image)
                                        onOpen()
                                    }}>
                                        <Card.Img variant="top" src={index.thumbnail_url} className="image-foto" />
                                        <Card.Body className="body-card">
                                            <Card.Title className="line-clamp">{index.name_gallery}</Card.Title>
                                            <Card.Text className="text-card">{index.description_gallery}</Card.Text>

                                        </Card.Body>
                                    </Card>

                                )) : <p>loading</p>
                            }

                        </div>
                        <div className="recomentation-contain-another">
                            <div className="border-recomendarion-another">
                                <div className="tittle-recomend-another">
                                    Rekomendasi Video Lainnya
                                </div>
                                {
                                    recomendation != null ? recomendation.map((index) => (
                                        <Link className="box-recomend-another" to={{
                                            pathname: "/video-gallery/" + index.slug
                                        }}>
                                            <article className="text-recomend-another">
                                                {index.name}
                                            </article>
                                            <di>
                                                <FaAngleRight color="rgb(33, 93, 121)" />
                                            </di>

                                        </Link>
                                    )) : <p>Loading</p>
                                }


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default ContainVideoPage