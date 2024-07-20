// controllers/visitorController.js
const Visitor = require('../Models/Visitor');

const getVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = new Visitor();
    }
    visitor.count += 1;
    await visitor.save();
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  getVisitorCount,
};
