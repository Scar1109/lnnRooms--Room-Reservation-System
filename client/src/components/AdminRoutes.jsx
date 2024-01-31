import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRooms from "./AdminRooms";
import AddRooms from "./AddRooms";
import Bookings from "./Bookings";
import Users from "./Users";

function AdminRoutes() {
    return (
        <Routes>
            <Route path="/rooms" element={<AdminRooms />} />
            <Route path="/addrooms" element={<AddRooms />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
}

export default AdminRoutes;
