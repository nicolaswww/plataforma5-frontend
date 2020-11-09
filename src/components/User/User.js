import React from 'react';
import './User.css';

const User = ({user, removeUser}) => {
  return (
    <div className="user card mb-3 p-3">
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
      <div className="user__baggage">
        { user.baggages.map((baggage, i) => {
          return (
            <div key={i}>
              Baggage type: {baggage.type}
            </div>
          )
        }) }
      </div>
    </div>
  )
};

export default User;