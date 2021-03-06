import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form/Form';
import User from './components/User/User';

function App() {
  const API_URL = 'http://localhost:3000/api/v1';

  const [users, setUsers] = useState([]);

  const addUser = (payload) => {
    const apiUrl = `${API_URL}/user`;
    const options = {
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(payload)
    };
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(({data: newUser}) => {
        setUsers([newUser, ...users]);
      });
  }

  const removeUser = (id) => {
    const apiUrl = `${API_URL}/user/id/${id}`;
    fetch(apiUrl, {method: 'DELETE'})
      .then(() => setUsers(users.filter((user) => user.id !== id)));
  }

  useEffect(() => {
    const apiUrl = `${API_URL}/user`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then(({data: users}) => {
        setUsers(users);
      });
  }, [setUsers]);

  return (
    <Fragment>
      <div className="app container">
        <h1 className="app__title pt-3 pb-4 mb-3 py-lg-5 mb-lg-0 mt-lg-4">
          Usuarios
        </h1>
        <div className="row">
          <div className="col-12 col-lg-5">
            <Form addUser={addUser} />
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            {
              users.map(user => (
                <User
                  key={user.id}
                  user={user}
                  removeUser={removeUser}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment> 
  );
}

export default App;
