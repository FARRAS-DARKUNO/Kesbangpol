import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router";
import '../style/showDocumentPage.css'

const ShowDocumentPage = () => {

    const { slug } = useParams()

    const [contain, getContain] = useState(null)

    const setContain = async () => {
        await axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + slug)
            .then(function (response) {
                getContain(response.data.data[0])
                console.log('masuk aja BANGEEET')
                console.log(response.data.data[0]);
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
                {
                    contain != null ? contain.dokumen_file_name : 'LOADING'
                }
            </div>
            {
                contain != null ?
                    <div className="sdp-layout">
                        <article className="sdp-description">
                            {contain.description_dokumen}
                        </article>

                        <div className="spd-show-document">
                            <iframe
                                src={"data:application/pdf;base64," + contain.dokumen_file_data}
                                frameBorder="0"
                                scrolling="auto"
                                height="100%"
                                width="100%"
                            ></iframe>
                        </div>
                    </div>
                    : <p>LOADING</p>

            }

        </div>
    )
}

export default ShowDocumentPage