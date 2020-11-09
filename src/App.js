import React, {Fragment} from 'react';
import Form from './components/Form/Form';
import User from './components/User/User';

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1>
          Usuarios
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6">
            {/* Form */}
            <Form />
          </div>
          <div className="col-12 col-lg-6">
            {/* Users list */}
            <User />
          </div>
        </div>
      </div>
    </Fragment> 
  );
}

export default App;
