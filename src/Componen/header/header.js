import React, { useEffect, useState } from "react";
import {
    Image
} from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import './header.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { getDetail } from "../../redux/action";
import axios from "axios";


const Header = () => {

    // const dispatch = useDispatch()

    // const { detail } = useSelector(state => state.userReducer);

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

                {detail != null ? <Image src={detail.data.logo_instansi}
                    className="header-logo"
                /> : <p>hallo</p>}


                <div className="contac">
                    <div className="telepon">
                        <div className="text-header">
                            <FiPhoneCall className="telepon-logo" />
                        </div>

                        <div className="text-header">
                            <article className="title-contact">Call us ?</article>
                            {detail != null ? <article className="info-contact">{detail.data.nomor_telepon}</article> : <p>hallo</p>}
                            {/* <article className="info-contact">{detail.data.nomor_telepon}</article> */}
                        </div>
                    </div>
                    <div className="email">

                        <div className="text-header">
                            <MdEmail className="email-logo" />
                        </div>

                        <div className="text-header">
                            <article className="title-contact">E-Mail us ?</article>
                            {detail != null ? <article className="info-contact">{detail.data.email}</article> : <p>hallo</p>}
                            {/* <article className="info-contact">{detail.data.email}</article> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;