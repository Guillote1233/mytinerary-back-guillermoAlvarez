import express from 'express';
import citiesController from '../controllers/citiesController.js'

const {getAllCities, createOneCity, updateCity, deleteCity, getOneCity } = citiesController;
const indexRouter = express.Router();

indexRouter.get('/cities', getAllCities );
indexRouter.get('/cities/:id', getOneCity );
indexRouter.post('/cities', createOneCity );
indexRouter.put('/cities/:id', updateCity);
indexRouter.delete('/cities/:id', deleteCity);

export default indexRouter;
