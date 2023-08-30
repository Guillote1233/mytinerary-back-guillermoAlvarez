import Itinerary from "../models/Itineraries.js";

const itineraryController = {
  
  getAllItinerary: async (req, res) => {
    try {
      const itineraries = await Itinerary.find();
      res.json(itineraries);
    } catch (error) {
      console.error(error);
      res.json({ message: 'Error al obtener los itinerarios' });
    }
  },
  
  getOneItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      const itinerary = await Itinerary.findById(id);
      if (!itinerary) {
        return res.json({ message: "Itinerario no encontrado" });
      }
      res.json(itinerary);
    } catch (error) {
      console.error(error);
      res.json({ message: "Error al obtener el itinerario" });
    }
  },

  getItineraryByCity: async (req, res) => {
    try {
      const itineraries = await Itinerary.find({cityId: req.params.id});
      res.json(itineraries);
    } catch (error) {
      console.error(error);
      res.json({ message: 'Error al obtener los itinerarios de la ciudad' });
    }
  },

  createItinerary: async (req, res) => {
    const newItineraryData = req.body;
    try {
      const newItinerary = await Itinerary.create(newItineraryData);
      res.json(newItinerary);
    } catch (error) {
      console.error(error);
      res.json({ message: "Error al crear el itinerario" });
    }
  },

  updateItinerary: async (req, res) => {
    const { id } = req.params;
    const updatedItineraryData = req.body;
    try {
      const updatedItinerary = await Itinerary.findByIdAndUpdate(
        id,
        updatedItineraryData,
        { new: true }
      );
      res.json(updatedItinerary);
    } catch (error) {
      console.error(error);
      res.json({ message: "Error al actualizar el itinerario" });
    }
  },

  deleteItinerary: async (req, res) => {
    const { id } = req.params;
    try {
      await Itinerary.findByIdAndRemove(id);
      res.json({ message: "Itinerario eliminado correctamente" });
    } catch (error) {
      console.error(error);
      res.json({ message: "Error al eliminar el itinerario" });
    }
  },
};

export default itineraryController;