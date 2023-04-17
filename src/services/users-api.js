const fetchUsers = () => {
  return fetch('https://dummyjson.com/users').then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Not found!'));
  });
};

const fetchUserById = (id) => {
  return fetch(`https://dummyjson.com/users/${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Not found!'));
  });
};

const api = {
  fetchUsers,
  fetchUserById,
};

export default api;
