import React from 'react';
import './User.css';

const User = ({user, removeUser}) => {
  const BAGGAGE_LABELS = {
    '1': 'Prenda',
    '2': 'Pequeño',
    '3': 'Grande'
  };

  return (
    <div className="user card mb-3 py-2 px-3">
      <div className="user__name">
        {user.name}
      </div>
      <div className="user__flight">
        {user.flight}
      </div>
      <div className="user__actions">
        <button
          className="btn btn-danger"
          onClick={() => removeUser(user.id)}
        >
          Retirar
        </button>
      </div>
      <div className="user__baggage mt-3">
        { user.baggages.map((baggage, i) => {
          return (
            <div key={i}>
              Equipaje {i + 1}: {BAGGAGE_LABELS[baggage.type]}
            </div>
          )
        }) }
      </div>
    </div>
  )
};

export default User;