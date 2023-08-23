import City from "../models/City.js"; 

const citiesController = {
  getAllCities: async (req, res, next) => {
    try {
      const cities = await City.find();
        res.json({
        success: true,
        cities: cities,
      });
    } catch (error) {
      res.json({
        success: false,
        error: "Internal server error",
      });
    }
  },

  getOneCity: async (req, res, next) => {
    try {
      const city = await City.findById(req.params.id);
      res.json({
        success:true,
        message:"city found",
        city: city
      });

    } catch (err) {
      res.json({
        success: false,
        error: "Internal server error",
      });
    }
  },

  createOneCity: async (req, res, next) => {
    try {
      const newCity = City(req.body);
      await newCity.save();
      res.json({success:true});

    } catch (error) {
        res.json({success:false, error: "Internal server error"});
    }
  },


  updateCity: async (req, res, next) => {
    try {
      const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ 
        success: true, 
        city: updatedCity 
      });
    } catch (error) {
      res.json({
        success: false,
        error: "Internal server error",
      });
    }
  },

  deleteCity: async (req, res, next) => {
    try {
      const deletedCity = await City.findByIdAndDelete(req.params.id);
      res.json({
        success: true,
        message: "City deleted",
        city: deletedCity });
    } catch (error) {
      res.json({
        success: false,
        error: "Internal server error",
      });
    }
  }
};

export default citiesController