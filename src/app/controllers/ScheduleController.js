import Appointment from '../models/Appointment';
import User from '../models/User';

class SqueduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!checkUserProvider)
      res.status(401).json({ error: 'user is not a provider' });

    return res.json({});
  }
}

export default new SqueduleController();
