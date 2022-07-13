import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import '../cardArticle/cardArticle.css'
import { articleApi } from "../../util/api";


const CardArticleReal = () => {

    const [newsCard, getNewsCard] = useState(null)



    useEffect(() => {
        axios.get(articleApi)
            .then(function (response) {
                var temp = []
                for (let i = 0; i < 4; i += 1) {
                    if (i < response.data.data.data.length) {
                        temp.push(response.data.data.data[i])
                    }
                }
                getNewsCard(temp)
                console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <div className="all">
            <div className="grip-article">

                {newsCard != null ? newsCard.map((placement) => (
                    <Link to={{
                        pathname: '/article/' + placement.id
                    }}>
                        <Card className='card' >
                            <Card.Img variant="top" src={placement.image_file_data} className="image-card" />
                            <Card.Body className="body-card">
                                <Card.Title className="line-clamp">{placement.title}</Card.Title>
                                <Card.Text className="text-card">{placement.intro}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Link>

                )) : <p>Loading</p>}


            </div>
        </div>

    );
}

export default CardArticleReal;