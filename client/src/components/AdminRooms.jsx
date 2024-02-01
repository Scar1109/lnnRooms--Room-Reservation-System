import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import axios from "axios";
import Swal from "sweetalert2";
import { Pagination } from "antd";

function AdminRooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        async function fetchRooms() {
            try {
                setLoading(true);
                const response = await axios.get(
                    `${process.env.PUBLIC_URL}/api/rooms/getAllRooms`
                );
                setRooms(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log(error);
            }
        }
        fetchRooms();
    }, []);

    const deleteRoom = (roomId) => {
        try {
            setLoading(true);
            axios.get(
                `${process.env.PUBLIC_URL}/api/rooms/deleteRoom/${roomId}`
            );
            setLoading(false);
            Swal.fire({
                title: "Room Deleted Successfully",
                text: "Press 'OK' to redirect",
                icon: "success",
            }).then((results) => {
                window.location.reload();
            });
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log(error);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = rooms.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error />
            ) : (
                <div className="table-container">
                    <div class="table-responsive">
                        <table class="table table-striped text-start">
                            <thead class="thead">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Room ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Max Visitor Count</th>
                                    <th scope="col">Price (Per Day)</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((room, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1 + itemsPerPage * (currentPage-1)}</th>
                                            <td>{room._id}</td>
                                            <td>{room.name}</td>
                                            <td>{room.roomType}</td>
                                            <td>{room.maxCount}</td>
                                            <td>{room.pricePerDay} LKR</td>
                                            <td>{room.phoneNo}</td>
                                            <td>
                                                <span
                                                    className="material-symbols-outlined"
                                                    id={`delete-${index}`}
                                                    onClick={() =>
                                                        deleteRoom(room._id)
                                                    }
                                                >
                                                    delete
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination-container">
                        <Pagination
                            current={currentPage}
                            defaultCurrent={1}
                            pageSize={itemsPerPage}
                            total={rooms.length}
                            onChange={paginate}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminRooms;
