/* eslint-disable react/button-has-type */
import React from 'react';
import Axios from 'axios';

const Terminate = props => {
  return (
    <button
      onClick={e => {
        console.log('employee = ', props.employee);
        e.target.innerHTML = 'Terminating...';
        Axios.delete(`/api/employees/${props.employee.id}`)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
        e.target.innerHTML = 'Terminated';
        e.target.className = 'btn btn-outline-success btn-sm';
      }}
      className="btn btn-outline-danger btn-sm"
      id={props.employee.id}
    >
      Terminate
    </button>
  );
};

export default Terminate;
