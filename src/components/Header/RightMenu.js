import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
    return (
        <Menu mode={mode}>
            <Menu.SubMenu
                key="user-menu"
                title={
                    <>
                        <Avatar icon={<UserOutlined />} />
                        <span className="username">John Doe</span>
                    </>
                }
            >
                <Menu.Item key="project" icon={<CodeOutlined />}>
                    Projects
                </Menu.Item>
                <Menu.Item key="about-us" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="log-out" icon={<LogoutOutlined />}>
                    Logout
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

export default RightMenu;
