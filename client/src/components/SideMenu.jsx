import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MdOutlineBedroomChild } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { DashboardOutlined } from "@ant-design/icons";
import { Menu, ConfigProvider } from "antd";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem("Dashboard", "/admin", <DashboardOutlined />),
    getItem("Rooms", "sub1", <MdOutlineBedroomChild />, [
        getItem("All Rooms", "/admin/rooms"),
        getItem("Add Room", "/admin/addrooms"),
    ]),
    getItem("Bookings", "/admin/bookings", <BiPurchaseTag />),
    getItem("Users", "/admin/users", <FaRegUser />),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

function SideMenu() {
    const location = useLocation();
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(["/admin"]);
    const [selectedKeys, setSelectedKeys] = useState("/admin");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="SideMenu">
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            iconSize: "20px",
                            itemHeight: "40px",
                        },
                    },
                }}
            >
                <Menu
                    mode="inline"
                    openKeys={openKeys}
                    selectedKeys={[selectedKeys]}
                    onOpenChange={onOpenChange}
                    onClick={(item) => {
                        // Navigate to the clicked item's key
                        navigate(item.key);
                    }}
                    style={{
                        width: 200,
                        textAlign: "left",
                    }}
                    items={items}
                />
            </ConfigProvider>
        </div>
    );
}

export default SideMenu;
