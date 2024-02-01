import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tag } from "antd";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(
        () => async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `${process.env.PUBLIC_URL}/api/users/getAllUsers`
                );
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log(error);
            }
        },
        []
    );
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
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User Created at</th>
                                    <th scope="col">User Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {moment(user.createdAt).format(
                                                    "DD-MM-YYYY"
                                                )}
                                            </td>
                                            <td>
                                                {user.isAdmin ? (
                                                    <Tag color="red">Admin</Tag>
                                                ) : (
                                                    <Tag color="green">
                                                        User
                                                    </Tag>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;
