import React, { Fragment, useState } from 'react';
import './Form.css';

const Form = ({addUser}) => {
  const [user, setUser] = useState({
    name: '',
    flight: ''
  });
  const [baggages, setBaggages] = useState([{
    type: '1'
  }]);
  const [error, setError] = useState('');

  const MAX_BAGGAGES = 3;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeBaggageType = (e, i) => {
    const {value: type} = e.target;
    setBaggages(baggages.map((baggage, index) => index === i ? {type} : baggage));
  }

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
    
    const userWithBaggages = {...user, baggages: [...baggages]};
    addUser(userWithBaggages);

    setUser({name: '', flight: '', baggages: []});
    setBaggages([{type: '1'}]);
  }

  const clickAddBaggage = () => {
    setBaggages([...baggages, {type: '1'}]);
  }

  const clickRemoveBaggage = (i) => {
    setBaggages(baggages.filter((_, index) => index !== i));
  }


  return (
    <Fragment>
      <h4 className="mb-3">Datos del pasajero</h4>
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

        <h4 className="mt-4 mb-3">Datos del equipaje</h4>

        <div className="form__baggages mb-5">
          {
            baggages.map((baggage, i) => {
              return (
                <div className="baggage d-flex align-items-center" key={i}>
                  <label className="mb-0">Tipo</label>
                  <select onChange={(e) => handleChangeBaggageType(e, i)}>
                    <option value="1">
                      Grande
                    </option>
                    <option value="2">
                      Pequeño
                    </option>
                    <option value="3">
                      Prenda
                    </option>
                  </select>
                  { i > 0 && (i + 1) === baggages.length ? (
                    <div className="baggage__delete">
                      <button
                        className="btn btn-outline-danger ml-3"
                        type="button"
                        onClick={() => clickRemoveBaggage(i)}
                      >
                        Eliminar
                      </button>
                    </div>
                  ) : null }
                </div>
              )
            })
          }
          { baggages.length < MAX_BAGGAGES ? (
              <button
                className="btn btn-outline-primary mt-3"
                type="button"
                onClick={() => clickAddBaggage()}
              >
                + Agregar otro
              </button>
          ) : null }
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