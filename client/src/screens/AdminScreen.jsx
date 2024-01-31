// AdminScreen.jsx
import React from "react";
import SideMenu from "../components/SideMenu";
import AdminRoutes from "../components/AdminRoutes";

function AdminScreen() {
    return (
        <div className="SideMenuAndPageContent">
            <SideMenu />
            <div className="PageContent"><AdminRoutes /></div>
        </div>
    );
}

export default AdminScreen;
