import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let getRes = async () => {
            try {
                setLoading(true);
                const response = (await axios.get("api/rooms/getAllRooms"))
                    .data;
                setRooms(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getRes();
    }, []);

    return (
        <div className="row justify-content-center mt-4">
            {loading ? (
                <Loader />
            ) : rooms ? (
                rooms.map((room) => {
                    return (
                        <div className="col-md-9 mt-2">
                            <Room room={room} />
                        </div>
                    );
                })
            ) : <Error />}
        </div>
    );
}

export default HomeScreen;
