/* eslint-disable react/button-has-type */
import React from 'react';
import Axios from 'axios';

const openForEditing = employee => {
  const row = document.getElementById(employee.id);
  const cells = [...row.getElementsByTagName('TD')];
  cells[0].innerHTML = `<input type="text" value="${employee.firstName}" />`;
  cells[1].innerHTML = `<input type="text" value="${employee.lastName}" />`;
  cells[2].innerHTML = `<input type="text" value=${employee.email} />`;
  cells[3].innerHTML = `<input type="text" value="${employee.title}" />`;
};

const closeForEditing = employee => {
  const row = document.getElementById(employee.id);
  const cells = [...row.getElementsByTagName('TD')];
  cells[0].innerHTML = `<input type="text" value="${employee.firstName}" readonly />`;
  cells[1].innerHTML = `<input type="text" value="${employee.lastName}" readonly />`;
  cells[2].innerHTML = `<input type="text" value=${employee.email} readonly />`;
  cells[3].innerHTML = `<input type="text" value="${employee.title}" readonly />`;
};

const getEmployeeChanges = employee => {
  const row = document.getElementById(employee.id);
  const cells = [...row.getElementsByTagName('INPUT')];
  return {
    id: employee.id,
    firstName: cells[0].value,
    lastName: cells[1].value,
    email: cells[2].value,
    title: cells[3].value
  };
};

const Edit = props => {
  return (
    <button
      id={`edit-${props.employee.id}`}
      onClick={() => {
        openForEditing(props.employee);
        const thisButton = document.getElementById(`edit-${props.employee.id}`);
        thisButton.innerHTML = 'Submit';
        thisButton.onclick = function() {
          const changes = getEmployeeChanges(props.employee);
          console.log('REQUESTING CHANGES ', changes);
          Axios.put(`/api/employees/${props.employee.id}`, {
            ...changes
          })
            .then(res => {
              console.log(res.data);
              closeForEditing(changes);
              thisButton.innerHTML = 'Edit';
            })
            .catch(error => {
              console.error(error);
            });
        };
      }}
      className="btn btn-outline-primary btn-sm"
    >
      Edit
    </button>
  );
};

export default Edit;
