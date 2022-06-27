import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";

import '../style/articlePage.css'

const ArticlePage = () => {

    const [newsCard, getNewsCard] = useState(null)
    const [articleMain, getArticleMain] = useState(null)

    const getRecomendation = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/article?instansi_id=2")
            .then(function (response) {
                getNewsCard(response.data.data.data)
                // console.log(response.data.data.data[0]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    const getArticleDetail = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/article/2-vero-eos-et-accusamus-et-iusto-odio-dignissimos-ducimus-qui-blanditiis-praesentium-voluptatum-deleniti-atque-corrupti-quos-dolores-et-quas-molestias")
            .then(function (response) {
                getArticleMain(response.data.data)
                console.log('masuk')
                console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    const innerHTMLCool = () => {
        return { __html: articleMain.content };
    }


    useEffect(() => {
        getRecomendation()
        getArticleDetail()
    }, []);


    return (
        <div className="all-article-page">
            <div className="margin-article-page">
                {
                    articleMain != null ? <div className="main-article">
                        <div className='title-article-articlepage'>
                            <article className="text-title-articlepage">
                                {articleMain.title}
                            </article>
                        </div>
                        <div className="image-article-articlepage">
                            <Image
                                src={articleMain.image_file_data}
                                alt='Dan Abramov'
                                className="image-articlepage"
                            />

                        </div>
                        <div className="text-main-article-articlepage"
                            dangerouslySetInnerHTML={innerHTMLCool()}
                        />

                    </div>
                        : <p>Loading</p>
                }
                <aside className="recomend-article">
                    <div className="rekomendasi-baritalainnya-articlepage">
                        Berita Lainnya
                    </div>
                    {newsCard != null ? newsCard.map((placement) => (
                        <div className="list-recomentation-articlepage">
                            <div>
                                <article className="title-list-recomendation-article">
                                    {placement.title}
                                </article>
                            </div>
                            <div>
                                <FaAngleRight />
                            </div>
                        </div>
                    )) : <p>Loading</p>}


                </aside>
            </div>
        </div>
    )

}
export default ArticlePage