import express from 'express';
import citiesController from '../controllers/citiesController.js'
import itineraryController from '../controllers/itineraryController.js';

const { getAllCities, createOneCity, updateCity, deleteCity, getOneCity } = citiesController;
const { getAllItinerary, getItineraryByCity, getOneItinerary, createItinerary, updateItinerary, deleteItinerary } = itineraryController;

const indexRouter = express.Router();

indexRouter.get('/cities', getAllCities );
indexRouter.get('/cities/:id', getOneCity );
indexRouter.post('/cities', createOneCity );
indexRouter.put('/cities/:id', updateCity);
indexRouter.delete('/cities/:id', deleteCity);

indexRouter.get('/city-itineraries', getAllItinerary)
indexRouter.get('/city-itineraries/:id', getOneItinerary);
indexRouter.get('/city-itineraries/:cityId', getItineraryByCity);
indexRouter.post('/city-itineraries', createItinerary);
indexRouter.put('/city-itineraries/:id', updateItinerary);
indexRouter.delete('/city-itineraries/:id', deleteItinerary);

export default indexRouter;
