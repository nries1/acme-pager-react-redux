import React from 'react';
import { store } from './app.js';

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
};

// class Table extends React.Component {
//   constructor() {
//     super();
//     this.state = store.getState();
//   }
//   render() {
//     console.log('TABLE HAS STATE =  ', this.state);
//     console.log('STORE STATE = ', store.getState());
//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.employees.length > 0
//             ? this.state.employees.map(employee => {
//                 return (
//                   <tr key={employee.id}>
//                     <td>{employee.firstName}</td>
//                     <td>{employee.lastName}</td>
//                     <td>{employee.email}</td>
//                     <td>{employee.title}</td>
//                   </tr>
//                 );
//               })
//             : 'Loading...'}
//         </tbody>
//       </table>
//     );
//   }
// }

export default Table;
