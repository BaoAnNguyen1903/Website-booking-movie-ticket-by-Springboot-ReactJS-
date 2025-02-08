import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/"}>
          Home
        </Link>
      ),
      key: "home",
      icon: <HomeOutlined />
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/users"}>
          Users
        </Link>
      ),
      key: "users",
      icon: <UserOutlined />
    },
    {
      label: (
        <Link style={{ textDecoration: "none" }} to={"/books"}>
          Books
        </Link>
      ),
      key: "books",
      icon: <BookOutlined />
    },
    {
      label: "cai dat",
      key: `setting`,
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/login"}>Dang nhap</Link>,
          key: "login"
        },
        {
          label: "dang xuat",
          key: "logout"
        }
      ]
    }
  ];
  return (
    // <ul>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     <li><NavLink to="/login">Login</NavLink></li>
    //     <li><NavLink to="/user">User</NavLink></li>
    // </ul>

    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
//ân ăn cứtcứt