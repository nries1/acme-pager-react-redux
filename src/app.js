import React from 'react';
import Pagination from './pagination.js';
import Table from './table.js';
import axios from 'axios';
import { createStore, combineReducers } from 'Redux';

import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const initialState = {
  employees: [],
  currentPage: window.location.hash.replace(/#/, '') || 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changePage':
      return {
        employees: action.data.emplyees,
        currentPage: action.data.changePage
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    // this.changePage = page => {
    //   [...document.getElementsByClassName('page-link')].forEach(link => {
    //     console.log(link.classList.value.indexOf('page-link'));
    //     if (link.innerHTML === page.toString()) {
    //       link.classList.add('active');
    //     } else {
    //       link.classList.remove('active');
    //     }
    //   });
    //   const componentContext = this;
    //   console.log('CHANGING PAGE IN APP TO ', page);
    //   axios.get(`/api/employees/${Number(page) - 1}`).then(res => {
    //     console.log('EMPLOYEES ', res.data.rows);
    //     const sortedEmployees = res.data.rows.sort((a, b) => {
    //       if (a.firstName < b.firstName) return -1;
    //       if (a.firstName > b.firstName) return 1;
    //       return 0;
    //     });
    //     this.setState({ currentPage: page, employees: sortedEmployees });
    //   });
    // };
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
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
        this.setState({ employees: sortedEmployees });
      });
  }
  render() {
    console.log('Rendering App with state = ', this.state);
    return (
      <div>
        <Pagination />
        <Table />;
      </div>
    );
  }
}

export default App;
