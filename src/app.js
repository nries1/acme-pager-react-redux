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
        employees: action.data.employees,
        currentPage: action.data.currentPage
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
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
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

export { store, App };
