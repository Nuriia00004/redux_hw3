import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(response => { setUsers(response.data.users) }) 
    .catch(error => {console.error(error)})
  }, [])
  return (
    <div>
      <h1>Users List</h1>
      <div>
        {
          users.map(user => (
            <Link to={`./${user.id}`} key={user.id}>
              {user.firstName} { user.lastName}</Link>
          ))
       }
       
        
      </div>
    </div>
  );
};

export default UsersListPage;
