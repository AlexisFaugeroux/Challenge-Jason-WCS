// Require Crew model
const Crew = require('../models/Crew.js');

const crewController = {
    async getNames(req, res) {
        try {
            // Using findAll method to get all names stored in database
            const names = await Crew.findAll({
                order: [['name', 'ASC']], // Order names alphabetically
            });

            return res.json(names); // Set response format to JSON
        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: 'Unexpected server error. Please try again later.' });
        }
    },
    async addName(req, res) {
        const { name } = req.body;
        // Checking that a name has been provided
        if (!name) {
            return res.status(400).json({ error: 'Name cannot be empty' });
        }
        // Checking that the provided name is not a number
        if (typeof name === 'number') {
            return res.status(400).json({ error: 'Name cannot be a number' });
        }
        try {
            // Using create method to create a new instance of Crew model
            // with data provided by the client and store it in database
            const newName = await Crew.create({ name });

            return res.json(newName);
        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: 'Unexpected server error. Please try again later.' });
        }
    },
};

module.exports = crewController;
