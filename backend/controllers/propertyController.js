import Property from "../models/Property.js";

export const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    const savedProperty = await property.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};