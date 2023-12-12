import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HomeScreen() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [duplicateRooms, setDuplicateRooms] = useState([])
    
    useEffect(() => {

        (async () => {
    
            try {

                setLoading(true)
                const data = (await axios.get("/api/rooms/getallrooms")).data
                setRooms(data.rooms)
                setDuplicateRooms(data.rooms)
                setLoading(false)

            } catch (error) {

            setError(true)
            console.log(error)
            setLoading(false)

            }
        })();
        }, []);
        
    return (
        <div>
            <h1>Home Screen</h1>
        </div>
        
    )
}

export default HomeScreen
