import React from 'react';
import { store } from './app.js';
import Terminate from './terminate.js';
import Edit from './edit.js';

const Table = () => {
  const state = store.getState();
  console.log(state);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
          <th>Manage Employee</th>
        </tr>
      </thead>
      <tbody>
        {state.employees.length > 0
          ? state.employees.map(employee => {
              return (
                <tr id={employee.id} key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.title}</td>
                  <td>
                    <Terminate employee={employee} />
                    <Edit id={`edit-${employee.id}`} employee={employee} />
                  </td>
                </tr>
              );
            })
          : 'Loading...'}
      </tbody>
    </table>
  );
};

export default Table;
