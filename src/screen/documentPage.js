import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import axios from "axios";

import '../style/documentPage.css'

const DocumentPage = () => {

    const [contain, getContain] = useState(null)

    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/dokumen?instansi_id=15")
            .then(function (response) {
                getContain(response.data.data.data)
                console.log('masuk aja 15')
                console.log(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        setContain()
    }, [])

    return (
        <div className="all-galery-foto-page">

            <div className="title-galery-foto-Page">
                Document
            </div>
            <div className="documen-layout">
                <div className="domumen-contain">
                    <article className="document-tittle">
                        File Penting
                    </article>
                    {
                        contain != null ? contain.map((index) => (
                            <div className="documen">
                                <article className="title-document">
                                    {index.dokumen_item[0].dokumen_file_name}
                                </article>
                                <article className="sub-tittle-document">
                                    {index.description}
                                </article>
                            </div>
                        )) : <p>Loading</p>
                    }

                </div>
            </div>
        </div>
    )
}

export default DocumentPage