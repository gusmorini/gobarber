import Notifcation from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const limit = 20;

    const notifications = await Notifcation.find({ user: req.userId })
      .sort('createdAt')
      .limit(limit);

    return res.json(notifications);
  }
}

export default new NotificationController();
