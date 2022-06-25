import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";

import '../style/articlePage.css'

const ArticlePage = () => {

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
        <div className="all-article-page">
            <div className="margin-article-page">
                <div className="main-article">
                    <div className='title-article-articlepage'>
                        <article className="text-title-articlepage">
                            hallo SEmauaaaa nama saya milo hallo SEmauaaaa nama saya milo hallo SEmauaaaa nama saya milo hallo SEmauaaaa nama saya milo
                        </article>
                    </div>
                    <div className="image-article-articlepage">
                        <Image
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                            className="image-articlepage"
                        />

                    </div>
                    <div className="text-main-article-articlepage">
                        <article>
                            huahushauhb ub uauicbias icbiuiu bcuabiu bauibiub dabu uabu u baubioadbyodabobioia iuban opiahupb onu ioadnon oonoa oaoihioadd
                        </article>
                    </div>
                </div>
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