import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  //emty arr sẽ chỉ chạy 1 lần ( arr rỗng )
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        {" "}
        <UserForm loadUser={loadUser} />{" "}
      </div>
      <div>
        {" "}
        <UserTable dataUSers={dataUsers} loadUser={loadUser} />{" "}
      </div>
    </div>
  );
};

export default UserPage;
