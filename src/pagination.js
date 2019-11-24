import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { store } from './app.js';

const getEmployeesAndDispatch = page => {
  console.log('getting employees for page ', page);
  axios.get(`api/employees/${page}`).then(res => {
    console.log('EMPLOYEES = ', res.data.rows);
    store.dispatch({
      type: 'changePage',
      data: {
        employees: res.data.rows,
        currentPage: page
      }
    });
  });
};

const toggleActiveLinks = link => {
  [...document.getElementsByClassName('active')][0].classList.toggle('active');
  link.target.classList.add('active');
};

const Pagination = () => {
  const state = store.getState();
  console.log('Pagination HAS STATE =  ', state);
  return (
    <Router>
      <nav
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        aria-label="Page navigation example"
      >
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() => {
              if (Number(state.currentPage) === 1) return;
              getEmployeesAndDispatch(Number(state.currentPage) - 1);
            }}
          >
            <Link
              class="page-link"
              to={
                Number(state.currentPage) === 1
                  ? '/#1'
                  : `/#${Number(state.currentPage) - 1}`
              }
            >
              Previous
            </Link>
          </li>
          <li
            className="page-item active"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(0);
            }}
          >
            <Link to="/#1" class="page-link">
              1
            </Link>
          </li>
          <li
            className="page-item"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(1);
            }}
          >
            <Link to="/#2" class="page-link">
              2
            </Link>
          </li>
          <li
            className="page-item"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(2);
            }}
          >
            <Link to="/#3" class="page-link">
              3
            </Link>
          </li>
          <li
            className="page-item"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(3);
            }}
          >
            <Link to="/#4" class="page-link">
              4
            </Link>
          </li>
          <li
            className="page-item"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(4);
            }}
          >
            <Link to="/#5" class="page-link">
              5
            </Link>
          </li>
          <li
            className="page-item"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(5);
            }}
          >
            <Link to="/#6" class="page-link">
              6
            </Link>
          </li>
          <li
            className="page-item"
            onClick={e => {
              toggleActiveLinks(e);
              getEmployeesAndDispatch(6);
            }}
          >
            <Link to="/#7" class="page-link">
              7
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              if (Number(state.currentPage) === 6) return;
              getEmployeesAndDispatch(Number(state.currentPage + 1));
            }}
          >
            <Link
              to={
                Number(state.currentPage) === 7
                  ? '/#7'
                  : `/#${Number(state.currentPage) + 1}`
              }
              className="page-link"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};
export default Pagination;
