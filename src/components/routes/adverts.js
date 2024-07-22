const express = require('express');
const advertsRouter = express.Router();

const {
  getAllAdverts,
  getAdvertById,
  createAdvert,
  updateAdvert,
  deleteAdvert,
} = require('../controllers/advertsControllers');

// Маршрут для отримання всіх оголошень
advertsRouter.get('/', getAllAdverts);

// Маршрут для отримання оголошення за ID
advertsRouter.get('/:id', getAdvertById);

// Маршрут для створення нового оголошення
advertsRouter.post('/', createAdvert);

// Маршрут для оновлення існуючого оголошення за ID
advertsRouter.put('/:id', updateAdvert);

// Маршрут для видалення оголошення за ID
advertsRouter.delete('/:id', deleteAdvert);

module.exports = advertsRouter;
