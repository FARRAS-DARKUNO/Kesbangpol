import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

import './cardArticle.css'


const CardArticle = () => {

    const [newsCard, getNewsCard] = useState(null)



    useEffect(() => {
        axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
            .then(function (response) {
                getNewsCard(response.data.data.data)
                // console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })



    }, []);

    return (
        <div className="all">
            <div className="grip-article">

                {newsCard.map((placement) => (

                    <Card style={{ width: '20rem' }} className='card' >
                        <Card.Img variant="top" src={placement.image_file_data} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{placement.title}</Card.Title>
                            <Card.Text className="text">{placement.intro}</Card.Text>

                        </Card.Body>
                    </Card>

                ))}


            </div>
        </div>

    );
}

export default CardArticle;