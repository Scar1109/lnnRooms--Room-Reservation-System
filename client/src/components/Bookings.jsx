import React,{useState, useEffect} from 'react'
import axios from "axios";
import { Tag } from "antd";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            const getBookings = async () => {
                setLoading(true);
                const response = await axios.get(
                    `${process.env.PUBLIC_URL}/api/bookings/getAllBookings`
                );
                setBookings(response.data);
                setLoading(false);
            };
            getBookings();
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log(error);
        }
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error />
            ) : (
                <div class="table-responsive">
                <table class="table table-striped text-start">
                    <thead class="thead">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Room Name</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment Id</th>
                            <th scope="col">Booking Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{booking.roomName}</td>
                                    <td>{booking.fromDate}</td>
                                    <td>{booking.toDate}</td>
                                    <td>{booking.totalAmount} LKR</td>
                                    <td>{booking.transactionId}</td>
                                    <td>
                                        {booking.isBooked ? (
                                            <Tag color="green">Active</Tag>
                                        ) : (
                                            <Tag color="red">Canceled</Tag>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            )}
        </div>
    );
}

export default Bookings
