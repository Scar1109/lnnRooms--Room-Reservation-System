import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import { Tag } from "antd";
import Swal from "sweetalert2";

function MyBookings() {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getBookings() {
            setLoading(true);
            try {
                const bookings = await axios.post(
                    "/api/bookings/getBookingsByUserId",
                    { userId: user._id }
                );
                setBookings(bookings.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        getBookings();
    }, [user._id]);

    async function cancelBooking(booking) {
        const bookingId = booking._id;
        try {
            const cancel = await axios.post("/api/bookings/cancelBooking", {
                bookingId,
                roomId: booking.roomId,
            });

            if (cancel) {
                Swal.fire({
                    title: "Cancelation Successful",
                    text: "Press 'OK' to redirect",
                    icon: "success",
                }).then(results => {
                    
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="text-start">
            <h2>My Bookings</h2>
            <div className="row">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Error />
                ) : bookings ? (
                    bookings.map((booking) => {
                        return (
                            <div className="col-md-8 bookingContainer d-flex flex-column">
                                <h4>{booking.roomName}</h4>
                                <p>From: {booking.fromDate}</p>
                                <p>To: {booking.toDate}</p>
                                <p>Days: {booking.totalDays}</p>
                                <p>Amount: {booking.totalAmount}</p>
                                <p>Transaction Id: {booking.transactionId}</p>
                                <p>
                                    Booking status:{" "}
                                    {booking.isBooked ? (
                                        <Tag color="green">Active</Tag>
                                    ) : (
                                        <Tag color="red">Canceled</Tag>
                                    )}
                                </p>
                                <div className="d-flex justify-content-end">
                                    <button
                                        className="btn btn-primary"
                                        style={{
                                            backgroundColor: "#323232",
                                            boxShadow: "none",
                                            borderColor: "#323232",
                                        }}
                                        onClick={() => cancelBooking(booking)}
                                    >
                                        Cancel Booking
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h4>No Bookings</h4>
                )}
            </div>
        </div>
    );
}

export default MyBookings;
