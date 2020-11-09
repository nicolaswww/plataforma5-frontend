import React, { Fragment, useState } from 'react';
import './Form.css';

const Form = ({addUser}) => {
  const [user, setUser] = useState({
    name: '',
    flight: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();

    const {name, flight} = user;
    if (name.trim() === '') {
      setError('Completar el nombre');
      return;
    }
    if (flight.trim() === '') {
      setError('Completar el Nº de vuelo');
      return;
    }
    setError('');

    setUser({name: '', flight: ''});
    addUser(user);
  }

  return (
    <Fragment>
      <h2>Form</h2>
      <form className="form" onSubmit={submitForm}>
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
        { error ? (<p className="form__error">{error}</p>) : null }
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