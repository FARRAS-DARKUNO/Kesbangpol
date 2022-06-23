import React from "react";
import { Image } from '@chakra-ui/react'

import '../style/mainPage.css'


import CardArticle from "../Componen/cardArticle/cardArticle";

const MainPage = () => {
    return (

        <div className="layout">
            <div className="margin ">
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' cliassName="image-deerah" />
            </div>
            <div className="article">
                <article className="title-article">
                    Artickel
                </article>
                <CardArticle />

            </div>
        </div>

    );
}

export default MainPage;