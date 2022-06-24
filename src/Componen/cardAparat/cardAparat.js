import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

import './cardAparat.css'


const CardAparat = () => {

    const [newsCard, getNewsCard] = useState(null)
    const widthPicture = '24rem'


    useEffect(() => {
        axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/2")
            .then(function (response) {

                getNewsCard(response.data.data)
                console.log('response.data.data');
                console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <div className="all">
            <div className="grip-article">

                {newsCard != null ? <div className="aparat">

                    <Card style={{ width: widthPicture }} className='card' >
                        <Card.Img variant="top" src={newsCard.foto_kepala} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{newsCard.nama_kepala}</Card.Title>
                            <Card.Text className="text">Kepala</Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: widthPicture }} className='card' >
                        <Card.Img variant="top" src={newsCard.foto_wakil_kepala} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{newsCard.nama_wakil_kepala}</Card.Title>
                            <Card.Text className="text">Wakil Kepala</Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: widthPicture }} className='card' >
                        <Card.Img variant="top" src={newsCard.foto_sekretaris} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{newsCard.nama_sekretaris}</Card.Title>
                            <Card.Text >Sekretaris</Card.Text>

                        </Card.Body>
                    </Card>

                </div>

                    : <p>Loading</p>
                }


            </div>
        </div>

    );
}

export default CardAparat;