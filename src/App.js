import {useEffect, useState} from "react";

import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setfilteredUsers([...value])
        })
    }, [])

    const getFilter = (data) => {
        let filterAll = [...users]

        if (data.name) {
            filterAll = filterAll.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterAll = filterAll.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterAll = filterAll.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setfilteredUsers(filterAll)
    }
    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;