import React from 'react';
import axios from 'axios';
import store from './app.js';

class Table extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    console.log(`Getting employees for ${this.state.currentPage}`);
    axios
      .get(`/api/employees/${Number(this.state.currentPage) - 1}`)
      .then(res => {
        console.log(res.data.rows);
        const sortedEmployees = res.data.rows.sort((a, b) => {
          if (a.firstName < b.firstName) return -1;
          if (a.firstName > b.firstName) return 1;
          return 0;
        });
        store.dispatch({
          currentPage: this.state.currentPage,
          employees: sortedEmployees
        });
        //this.setState({ employees: sortedEmployees });
      });
  }
  render() {
    console.log('TABLE HAS STATE =  ', state);
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
          {state.employees.length > 0
            ? state.employees.map(employee => {
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
  }
}

export default Table;
