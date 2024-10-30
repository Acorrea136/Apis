import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=30') // Obtener 30 usuarios
            .then(response => {
                setUsers(response.data.results);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="users-grid">
            {users.map((user, index) => (
                <div className="user-card" key={index}>
                    <img src={user.picture.thumbnail} alt="User Thumbnail" className="user-image" />
                    <p className="user-name">{user.name.first} {user.name.last}</p>
                    <p className="user-email">{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
