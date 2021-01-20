var express = require('express');
var router = express.Router();

let pizzas = [];

router.get('/', (req, res, next) => {
  res.json(pizzas);
});

router.post('/', (req, res, next) => {
  pizzas = [
    ...pizzas,
    req.body,
  ];

  res.status(201).json(req.body);
});

router.get('/:id', (req, res, next) => {
  const pizza = pizzas[Number(req.params.id)];

  if (!pizza) {
    return res.status(404).json('Pizza not found');
  }

  res.json(pizza);
});

router.delete('/', (req, res, next) => {
  pizzas = [];

  res.status(204).send('OK');
});

module.exports = router;
