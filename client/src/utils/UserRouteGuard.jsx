import React from "react";
import { Navigate } from "react-router-dom";

const UserRouteGuard = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
        return children;
    } else {
        // Redirect to login page if the user is not logged in
        return <Navigate to="/login" />;
    }
};

export default UserRouteGuard;
