import React from 'react'
import Lottie from 'react-lottie-player'
import data from './111838-liquid.json'
import './loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <Lottie
                loop
                animationData={data}
                play
                style={{ width: 150, height: 150 }}
            />

        </div>
    )
}

export default Loading