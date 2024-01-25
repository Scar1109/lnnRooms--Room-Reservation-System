import React from "react";
import { Navigate } from "react-router-dom";
import Admin from "./pages/admin/admin";

const AdminRouteGuard = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user && user.isAdmin) {
        return <Admin />;
    } else {
        // Redirect to homepage or any other page
        return <Navigate to="/home" />;
    }
};

export default AdminRouteGuard;
