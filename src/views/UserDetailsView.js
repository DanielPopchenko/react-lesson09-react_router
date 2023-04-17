import { useEffect, useState } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import API from '../services/users-api';

export default function UserDetailsView() {
  // ! Диструктуризируем объект params, достаем оттуда айдишник
  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const match = useMatch();
  console.log(match);

  useEffect(() => {
    API.fetchUserById(userID).then(setUser);
  }, [userID]);

  console.log(user);
  return (
    <div>
      <h1 className="heading">User {userID}</h1>
      {user && (
        <div>
          <p>{`${user.firstName}  ${user.lastName}`}</p>
          <img src={user.image} alt={user.firstName} />
        </div>
      )}
    </div>
  );
}
