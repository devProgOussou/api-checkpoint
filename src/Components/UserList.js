import React, {useState, useEffect} from "react";
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const result = await axios
            .get('https://jsonplaceholder.typicode.com/users')
        setUsers(result.data);
    };
    useEffect(() => {
        fetchData().then(r => console.log(r));
    }, []);

    return (
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default UserList;
