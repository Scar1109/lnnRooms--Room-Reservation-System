import React, { useEffect } from "react";
import { Tabs } from "antd";
import MyBookings from "../components/MyBookings";
import Profile from "../components/Profile";

const { TabPane } = Tabs;

function ProfileScreen() {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        if (!user) {
            window.location.href = "/login";
        }
    }, [user]);

    return (
        <div>
            <div className="container mt-3">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Profile" key="1">
                        <Profile />
                    </TabPane>
                    <TabPane tab="Bookings" key="2">
                        <MyBookings />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}
export default ProfileScreen;
