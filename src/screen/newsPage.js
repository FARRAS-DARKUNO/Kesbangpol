import React, { useEffect, useState } from "react";
import { Image, Text } from '@chakra-ui/react'
import axios from "axios";

import '../style/newsPage.css'

const NewsPage = () => {

    const [newsCard, getNewsCard] = useState(null)



    useEffect(() => {
        axios.get("http://adminmesuji.embuncode.com/api/news?instansi_id=2")
            .then(function (response) {
                getNewsCard(response.data.data.data)
                console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <div className="all-news-page">
            <Text className="title-article-in-newpage"> ARTICLE</Text>
            <div className="show-all-news">

                {newsCard != null ? newsCard.map((placement) => (
                    <div className="show-news" >

                        <Image
                            src={placement.image_file_data}
                            className='image-in-articles'
                        />
                        <div className="text-in-article">
                            <Text
                                className="text-title-article"
                                marginBottom={5}
                            >
                                {placement.title}

                            </Text>

                            <Text
                                className="text-shord-desc"
                            >
                                {placement.intro}
                            </Text>
                        </div>
                    </div>
                )) : <p>Loading</p>
                }
            </div>
        </div>
    );
}

export default NewsPage;