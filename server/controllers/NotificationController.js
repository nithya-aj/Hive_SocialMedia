import Notification from '../models/Notifications.js'

export const getAllNotificaitons = async (req, res) => {
    const page = parseInt(req.query.page || 1);
    const pageSize = parseInt(req.query.pageSize || 10);
    try {
        const totalNotifications = await Notification.countDocuments();
        console.log(totalNotifications, 'totalNotifications');
        const notifications = await Notification.find({})
            .skip((page - 1) * pageSize)
            .limit(pageSize);
        console.log('notifications', notifications);
        res.json({
            notifications,
            totalPages: Math.ceil(totalNotifications / pageSize),
            currentPage: page,
        });
        console.log(res.json, 'res.json');
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
