import React from 'react';
import axios from 'axios';

const Table = props => {
  console.log('PROPS PASSED TO TABLE ', props);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {props.state.employees.length > 0
          ? props.state.employees.map(employee => {
              return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.title}</td>
                </tr>
              );
            })
          : 'Loading...'}
      </tbody>
    </table>
  );
};

export default Table;
