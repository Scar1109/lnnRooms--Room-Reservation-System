import React, { useEffect , useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookingScreen({match}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState({});
    let { roomId } = useParams();
    


    useEffect(() => {
        let getRes = async () => {
            try {
                    setLoading(true);
                    const response = (await axios.post("/api/rooms/getRoomById", { RoomId : roomId })).data;
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
            <h1>{room.name}</h1>
        </div>
    )
}

export default BookingScreen
