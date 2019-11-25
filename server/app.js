const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
// Do not touch this file
const { Employee } = require('./db/index.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const paginate = (pageNum, pageSize) => {
  return { limit: pageSize, offset: pageNum * pageSize };
};

app.get('/api/employees/:page?', (req, res, next) => {
  const resultsPerPage = 50;
  // pageNum is zero indexed
  let pageNum = req.params.page;
  if (pageNum === undefined) {
    pageNum = 0;
  } else if (isNaN(pageNum)) {
    return res.status(400).send({ error: 'Invalid page number' });
  }

  const { limit, offset } = paginate(pageNum, resultsPerPage);
  Employee.findAndCountAll({
    limit,
    offset,
    order: [
      ['firstName', 'asc'],
      ['lastName', 'asc']
    ]
  }).then(results => {
    res.status(200).send(results);
  });
});

app.delete('/api/employees/:id?', (req, res, next) => {
  const employeeId = req.params.id;
  Employee.destroy({
    where: {
      id: employeeId
    }
  })
    .then(result => {
      console.log('EMPLOYEE DELETED ', result);
      res.status(200).send({ employeesDeleted: result });
    })
    .catch(error => {
      console.log(error);
      res.status(400).send({ error });
    });
});

app.put('/api/employees/:id?', (req, res, next) => {
  console.log('REQ PARAMS = ', req.params);
  console.log('REQ BODY = ', req.body);
  const employeeId = req.params.id;
  Employee.update({ ...req.body }, { where: { id: employeeId } })
    .then(result => {
      console.log('RES AFTER PUT ', result);
      res.status(200).send({ msg: 'success' });
    })
    .catch(error => {
      res.status(400).send({ error });
    });
});

module.exports = { app };
