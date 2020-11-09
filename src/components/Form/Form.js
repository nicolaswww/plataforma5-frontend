import React, { Fragment, useState } from 'react';

const Form = ({addUser}) => {

  const [user, setUser] = useState({
    name: '',
    flight: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();

    const {name, flight} = user;
    if (name.trim() === '' || flight.trim() === '') {
      console.error('invalid form');
      // TODO: handle error
      return;
    }

    setUser({name: '', flight: ''});
    addUser(user);
  }

  return (
    <Fragment>
      <h2>Form</h2>
      <form onSubmit={submitForm}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ej: Juan Pérez"
            onChange={handleChange}
            value={user.name}
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
            value={user.flight}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Guardar
          </button>
        </div>
      </form>
    </Fragment>
  )
};

export default Form;