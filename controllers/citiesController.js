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
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  },

  getOneCity: async (req, res, next) => {
    const { id } = req.params
    try {
      const city = await City.findById(id);
      res.status(201).json({success:true});

    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  },

  createOneCity: async (req, res, next) => {
    try {
      const newCity = new City(req.body);
      await newCity.save();
      res.status(201).json({success:true});

    } catch (error) {
        res.status(500).json({success:false, error: "Internal server error"});
    }
  },


  updateCity: async (req, res, next) => {
    try {
      const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCity) {
        return res.status(404).json({ success: false, error: "City not found" });
      }
      res.json({ success: true, city: updatedCity });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  },

  deleteCity: async (req, res, next) => {
    try {
      const deletedCity = await City.findByIdAndDelete(req.params.id);
      if (!deletedCity) {
        return res.status(404).json({ success: false, error: "City not found" });
      }
      res.json({ success: true, message: "City deleted!" });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  }
};

export default citiesController