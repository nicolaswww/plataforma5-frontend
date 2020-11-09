import React, { Fragment, useState } from 'react';
import './User.css';

const User = ({user, removeUser, editUser}) => {
  const [edit, setEdit] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    flight: user.flight
  });

  const clickEdit = () => {
    setEdit(true);
  }

  const clickCancelEdit = () => {
    setEdit(false);
    setEditedUser({name: user.name, flight: user.flight});
  }

  const handleChange = e => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = () => {
    setEdit(false);
    editUser(user.id, editedUser)
  }

  return (
    <div className="user card">
      { edit ? (
            <Fragment>
              <form onSubmit={submitForm}>
                <div>
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej: Juan Pérez"
                    onChange={handleChange}
                    value={editedUser.name}
                  />
                </div>
                <div>
                  <label>Nº de vuelo</label>
                  <input
                    type="text"
                    name="flight"
                    placeholder="Ej: AR678"
                    maxLength="5"
                    onChange={handleChange}
                    value={editedUser.flight}
                  />
                </div>
                <div>
                  <button
                    onClick={() => clickCancelEdit()}
                    className="btn btn-secondary"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </Fragment>
          ) : (
            <Fragment>
              <div className="user__name">
                {user.name}
              </div>
              <div className="user__flight">
                {user.flight}
              </div>
            </Fragment>
          )
      }
      <div className="user__actions">
      { edit ? (
            <Fragment>
              
            </Fragment>
          ) : (
            <Fragment>
              <button
                className="btn btn-warning"
                onClick={() => clickEdit()}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeUser(user.id)}
              >
                Borrar
              </button>
            </Fragment>
          )
      }
      </div>
      <div className="user__baggage">
        {/* Add baggage list */}
      </div>
    </div>
  )
};

export default User;