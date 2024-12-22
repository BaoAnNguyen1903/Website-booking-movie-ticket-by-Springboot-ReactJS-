import React, { useEffect, useState } from 'react';

const ViewDetail = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/getUserById') // Gọi API từ Spring Boot
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>View</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    User id: {user.uid} <br />
                    User Name: {user.name} <br />
                    Date of Birth: {user.dob} <br />
                    Gender: {user.gender} <br />
                    Phone: {user.phone} <br />
                    Email: {user.email} <br />
                    Username: {user.username} <br />
                    Avatar: <img src={user.avatar} alt={user.name} /> <br />
                    Points: {user.points} <br />
                    Status: {user.status} <br />
                    Role: {user.role}
                  </li>                  
                ))}
            </ul>
        </div>
    );
};

export default ViewDetail;
