import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

function BookingScreen({ match }) {
    const [loading, setLoading] = useState(true);
    const [room, setRoom] = useState({});
    let { roomId } = useParams();

    useEffect(() => {
        let getRes = async () => {
            try {
                setLoading(true);
                const response = (
                    await axios.post("/api/rooms/getRoomById", {
                        RoomId: roomId,
                    })
                ).data;
                setRoom(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getRes();
    }, [roomId]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : room ? (
                <div className="bookingContainer">
                    <div className="row">
                        <div className="col-md-6">
                            <Carousel>
                                {room.imgURL.map((img) => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 bigImg"
                                                src={img}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </div>
                        <div className="col-md-5">
                            <h4>{room.name}</h4>
                            <div
                                style={{
                                    textAlign: "left",
                                    marginTop: "20px",
                                    marginLeft: "20px",
                                }}
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    Booking Details
                                </p>
                                <p>Customer's Name :</p>
                                <p className="marginReducer">From Date :</p>
                                <p className="marginReducer">To Date :</p>
                                <p className="marginReducer">
                                    Room Type : {room.roomType}
                                </p>
                                <p className="marginReducer">
                                    Max Guests Count : {room.maxCount}
                                </p>

                                <p style={{ fontWeight: "bold" }}>Amount</p>
                                <p>Type : {room.roomType}</p>
                                <p className="marginReducer">
                                    Price Per Day : {room.pricePerDay} LKR
                                </p>
                                <p className="marginReducer">
                                    Price : 00.00 LKR
                                </p>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{
                                    backgroundColor: "#323232",
                                    boxShadow: "none",
                                    borderColor: "#323232",
                                    float: "right",
                                    marginRight: "-100px",
                                    marginTop: "20px",
                                }}
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </div>
    );
}

export default BookingScreen;
