import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Pagination = props => {
  console.log('Rendering Pagination');
  console.log('PROPS IN PAGINATION ', props);
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
              if (Number(props.state.currentPage) === 1) return;
              props.changePage(Number(props.state.currentPage) - 1);
            }}
          >
            <Link
              class="page-link"
              to={
                Number(props.state.currentPage) === 1
                  ? '/#1'
                  : `/#${Number(props.state.currentPage) - 1}`
              }
            >
              Previous
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(1);
            }}
          >
            <Link to="/#1" class="page-link">
              1
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(2);
            }}
          >
            <Link to="/#2" class="page-link">
              2
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(3);
            }}
          >
            <Link to="/#3" class="page-link">
              3
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(4);
            }}
          >
            <Link to="/#4" class="page-link">
              4
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(5);
            }}
          >
            <Link to="/#5" class="page-link">
              5
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(6);
            }}
          >
            <Link to="/#6" class="page-link">
              6
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.changePage(7);
            }}
          >
            <Link to="/#7" class="page-link">
              7
            </Link>
          </li>
          <li
            className="page-item"
            onClick={() => {
              if (Number(props.state.currentPage) === 7) return;
              props.changePage(Number(props.state.currentPage) + 1);
            }}
          >
            <Link
              to={
                Number(props.state.currentPage) === 7
                  ? '/#7'
                  : `/#${Number(props.state.currentPage) + 1}`
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
