import React from 'react'

function Room({room}) {
    return (
        <div className='row bShadow'>
            <div className='col-md-4'>
                <img src= {room.imgURL[0]} className='smallImg'  alt=''></img>
            </div>
            <div className='col-md-7 text-start'>
                <h4>{room.name}</h4>
                <p>Max Count :{room.maxCount}</p>
                <p>Phone no :{room.phoneNo}</p>
                <p>Type : {room.roomType}</p>

                <div style={{float : 'right'}}>
                    <button className='btn btn-primary' style={{backgroundColor : "#323232", boxShadow : "none", borderColor : "#323232"}}>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Room
