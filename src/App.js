import React, { Fragment, useState } from 'react';
import Form from './components/Form/Form';
import User from './components/User/User';

function App() {

  const [users, setUsers] = useState([{
    id: 1,
    name: 'Nico',
    flight: 'AR123'
  }, {
    id: 2,
    name: 'Lulu',
    flight: 'AR124'
  }]);

  const addUser = (user) => {
    const newUser = {...user, id: Math.round(Math.random() * 1000)}
    setUsers([...users, newUser]);
    // TODO: add with API
  }

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    // TODO: delete with API
  }

  const editUser = (id, editedUser) => {
    setUsers(users.map((user) => user.id === id ? editedUser : user));
    // TODO: edit with API
  }

  return (
    <Fragment>
      <div className="container">
        <h1 className="py-5 my-lg-4">
          Usuarios
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form addUser={addUser} />
          </div>
          <div className="col-12 col-lg-6">
            {
              users.map(user => (
                <User
                  key={user.id}
                  user={user}
                  removeUser={removeUser}
                  editUser={editUser}
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
