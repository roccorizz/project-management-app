import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
    return (
        <Menu mode={mode}>
            <Menu.Item key="feature" className="menuItem">
                <a href="/">Features</a>
            </Menu.Item>

            <Menu.Item key="about" className="menuItem">About Us</Menu.Item>
            <Menu.Item key="contact" className="menuItem">Contact Us</Menu.Item>
        </Menu>
    );
};

export default LeftMenu;