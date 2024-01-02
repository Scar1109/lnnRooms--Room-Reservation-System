import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Room from '../components/Room';
function HomeScreen() {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let getRes = async () => {
            try {
                    setLoading(true);
                    const response = (await axios.request('api/rooms/getAllRooms')).data;
                    setRooms(response);
                    setLoading(false);
                }
                catch (error) {
                    setError(true);
                    console.log(error);
            }
        }
        getRes();
    },[])

    return (
        <div className='row justify-content-center mt-5'>
            {loading ? <div className ="spinner-border" role="status" style={{marginTop : "370px"}}>
                    
                </div> : error ? <p>An error happen please try again</p> : rooms.map( room => {
                    return<div className='col-md-9 mt-2'>
                            <Room room = {room} />
                        </div>
    
                    
                })}
        </div>
    )
}

export default HomeScreen
