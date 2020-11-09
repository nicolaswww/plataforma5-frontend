import React, { Fragment, useState } from 'react';

const Form = () => {

  const [user, setUser] = useState({
    name: '',
    flight: ''
  });

  const {name, flight} = user;

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

    console.log(user);
    // TODO: submit form (API)
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
            value={name}
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
            value={flight}
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