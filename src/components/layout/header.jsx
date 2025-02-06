import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { UserOutlined, HomeOutlined, BookOutlined } from "@ant-design/icons";
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
