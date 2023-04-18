import { useEffect, useState } from 'react';
import API from '../services/users-api';
import { Link } from 'react-router-dom';
import styles from './css/UsersView.module.css';

export default function UsersView() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    API.fetchUsers().then((users) => setUsers(users.users));
  }, []);

  return (
    <div>
      <h1 className="heading">Users</h1>
      <ul className={styles.list}>
        {users &&
          users.map((user) => (
            <li key={user.id} className={styles.userCard}>
              <Link className={styles.link} to={`/users/${user.id}`}>
                <img src={user.image} className={styles.image} alt={user.firstName} />
                {`${user.firstName} ${user.lastName}`}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
