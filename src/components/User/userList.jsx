import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/getAllUser') // Gọi API từ Spring Boot
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>List of Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>User id :{user.uid} User Name :{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
