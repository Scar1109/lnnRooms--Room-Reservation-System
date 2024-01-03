import React from 'react'
import { BeatLoader } from 'react-spinners';

function Loader() {
    return (
        <div className='spinner'><BeatLoader
            color="#000000"
            size={15}
            speedMultiplier={0.6}
        /></div>
    )
}

export default Loader
