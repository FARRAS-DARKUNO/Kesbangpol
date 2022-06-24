import React, { useEffect, useState } from "react";
import {
    Image
} from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import './header.css';
import axios from "axios";


const Header = () => {


    const [detail, setDetail] = useState(null)


    useEffect(() => {
        console.log('masuk')
        axios.get("http://adminmesuji.embuncode.com/api/instansi/detail/20")
            .then(function (response) {
                setDetail(response.data)
                // console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);




    return (
        <div className="header-all">
            <div className="sub-header">
                <div className="judul">
                    {detail != null ? <Image src={detail.data.logo_instansi}
                        className="header-logo"
                    /> : <p>Loading</p>}
                    <di className='get-width-phone'>
                        <h1 className="title-judul">
                            {detail != null ? detail.data.nama_instansi : 'Loading'}
                        </h1>
                        <h1 className="title-judul">
                            {detail != null ? '(' + detail.data.singkatan_instansi + ')' : 'Loading'}
                        </h1>
                    </di>


                </div>




                <div className="contac">
                    <div className="telepon">
                        <div className="text-header">
                            <FiPhoneCall className="telepon-logo" />
                        </div>

                        <div className="text-header">
                            <article className="title-contact">Call us ?</article>
                            {detail != null ? <article className="info-contact">{detail.data.nomor_telepon}</article> : <p>hallo</p>}
                        </div>
                    </div>
                    <div className="email">

                        <div className="text-header">
                            <MdEmail className="email-logo" />
                        </div>

                        <div className="text-header">
                            <article className="title-contact">E-Mail us ?</article>
                            {detail != null ? <article className="info-contact">{detail.data.email}</article> : <p>hallo</p>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;