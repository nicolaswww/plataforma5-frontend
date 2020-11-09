import React, { Fragment, useState } from 'react';
import './Form.css';

const Form = ({addUser}) => {
  const MAX_BAGGAGES = 3;
  const BAGGAGE_TYPES = {
    Small: '1',
    Medium: '2',
    Big: '3'
  };

  const [user, setUser] = useState({
    name: '',
    flight: ''
  });
  const [baggages, setBaggages] = useState([{
    type: BAGGAGE_TYPES.Small
  }]);
  const [error, setError] = useState('');

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
    setBaggages([{type: BAGGAGE_TYPES.Small}]);
  }

  const clickAddBaggage = () => {
    setBaggages([...baggages, {type: BAGGAGE_TYPES.Small}]);
  }

  const clickRemoveBaggage = (i) => {
    setBaggages(baggages.filter((_, index) => index !== i));
  }


  return (
    <Fragment>
      <form className="form" onSubmit={submitForm}>
        <h4 className="form__subtitle mb-3">Datos del pasajero</h4>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ej: Juan Pérez"
            className="form-control"
            onChange={handleChange}
            value={user.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="flight">Nº de vuelo</label>
          <input
            id="flight"
            type="text"
            name="flight"
            placeholder="Ej: AR678"
            maxLength="5"
            className="form-control"
            onChange={handleChange}
            value={user.flight}
          />
        </div>

        <h4 className="form__subtitle mt-4 mb-3 pt-lg-2">Datos del equipaje</h4>

        <div className="form__baggages mb-4 mb-lg-5">
          {
            baggages.map((baggage, i) => {
              return (
                <div className="baggage form-group d-flex align-items-center" key={i}>
                  <select
                    className="form-control"
                    onChange={(e) => handleChangeBaggageType(e, i)}
                  >
                    <option value={BAGGAGE_TYPES.Small}>
                      Prenda
                    </option>
                    <option value={BAGGAGE_TYPES.Medium}>
                      Pequeño
                    </option>
                    <option value={BAGGAGE_TYPES.Big}>
                      Grande
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
                className="btn btn-outline-primary"
                type="button"
                onClick={() => clickAddBaggage()}
              >
                + Agregar otro
              </button>
          ) : null }
        </div>

        { error ? (<p className="form__error">{error}</p>) : null }
        <div className="mb-5 mb-lg-0">
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Guardar
          </button>
        </div>
      </form>
    </Fragment>
  )
};

export default Form;