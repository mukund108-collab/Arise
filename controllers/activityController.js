const Activity = require('../models/Activity');

exports.addActivity = async (req, res) => {
  const { type, duration } = req.body;
  try {
    const activity = new Activity({
      user: req.user.id,
      type,
      duration
    });
    await activity.save();
    res.json({ msg: 'Activity logged', activity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.user.id }).sort({ timestamp: -1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
