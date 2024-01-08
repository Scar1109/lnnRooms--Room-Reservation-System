import React from "react";
import { Tag } from "antd";

function Profile() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);
    return (
        <div className="text-start">
            <h2 className="mt-1 ">My Profile</h2>
            <div style={{ fontSize: "1.2rem" }} className="mt-3">
                <p>First Name : {user.firstName}</p>
                <p>Last Name : {user.lastName}</p>
                <p>Email : {user.email}</p>
                <p>
                    Profile Status :{" "}
                    {user.isAdmin ? (
                        <Tag color="red">ADMIN</Tag>
                    ) : (
                        <Tag color="green">USER</Tag>
                    )}
                </p>
                <button
                    className="btn btn-primary m-3"
                    style={{
                        backgroundColor: "#323232",
                        boxShadow: "none",
                        borderColor: "#323232",
                    }}
                >
                    Edit Details
                </button>
                <button
                    className="btn btn-primary m-3"
                    style={{
                        backgroundColor: "#323232",
                        boxShadow: "none",
                        borderColor: "#323232",
                    }}
                >
                    Change Password
                </button>
            </div>
        </div>
    );
}

export default Profile;
