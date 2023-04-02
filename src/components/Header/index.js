import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from '../assets/logo.png'

const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const buttonIcon = visible ? <CloseOutlined /> : <MenuOutlined />;
    const buttonText = visible ? "Close" : "Menu";

    return (
        <nav className="navbar">
            <Layout>
                <Layout.Header className="nav-header">
                    <div className="logo">
                        <img src={logo} className="brand-font" alt="logo" />
                    </div>
                    <div className="navbar-menu">
                        <div className="leftMenu">
                            <LeftMenu mode={"horizontal"} />
                        </div>
                        <Button
                            className="menuButton"
                            type="text"
                            onClick={visible ? onClose : showDrawer}
                        >
                            {buttonIcon}
                            <span className="buttonText">{buttonText}</span>
                        </Button>
                        <div className="rightMenu">
                            <RightMenu mode={"horizontal"} />
                        </div>

                        <Drawer
                            title={"Project Management"}
                            placement="right"
                            onClose={onClose}
                            open={visible}
                            style={{ zIndex: 999999999, marginTop: "66px" }}
                            closeIcon={null}
                        >
                            <LeftMenu mode={"inline"} />
                            <RightMenu mode={"inline"} />
                        </Drawer>
                    </div>
                </Layout.Header>
            </Layout>
        </nav>
    );
};

export default Header;
