import React from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init(
);

function LandingPage() {
    return (
        <div className='row landing'  data-aos="zoom-out" data-aos-duration="1100">

            <div className='col-md-12 text-center mt-5 '>
                <h2 data-aos ='zoom-in' data-aos-duration="1300" style={{color:'white' , fontSize:'120px' ,fontWeight:'normal', fontFamily: 'cursive', letterSpacing : '10px'}}>InnRooms</h2>
                <h1 data-aos ='zoom-out' data-aos-duration="1000" className='mt-5' style={{color:'white'}} >"More Destinations. More Ease. More Affordable."</h1>

                <Link to = '/home' > <button className='btnlan' style={{color : 'black'}}>Book Now</button></Link>
            </div>

        </div>
    )
}

export default LandingPage