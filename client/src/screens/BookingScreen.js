import React, { useEffect , useState} from 'react'
import axios from 'axios';

function BookingScreen({match}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState({});
    const roomId = match.params.roomId;
    console.log(match.params.roomId);


    useEffect(() => {
        let getRes = async () => {
            try {
                    setLoading(true);
                    const response = (await axios.post('api/rooms/getRoomById', {id : match.params.roomId})).data;
                    setRoom(response);
                    setLoading(false);
                }
                catch (error) {
                    setError(true);
                    console.log(error);
            }
        }
        getRes();
    },[roomId])

    return (
        <div>
            <h1>{match.params.roomId}</h1>
        </div>
    )
}

export default BookingScreen
