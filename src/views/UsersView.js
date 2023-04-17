import { useEffect, useState } from 'react';
import API from '../services/users-api';
import { Link } from 'react-router-dom';

export default function UsersView() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    API.fetchUsers().then((users) => setUsers(users.users));
  }, []);

  return (
    <div>
      <h1 className="heading">Users</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Link className="" to={`/users/${user.id}`}>
                {`${user.firstName} ${user.lastName}`}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
