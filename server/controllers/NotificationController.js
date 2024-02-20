import Notification from '../models/Notifications.js'

export const getNotificationsForUser = async (req, res) => {
    const page = parseInt(req.query.page || 1);
    const pageSize = parseInt(req.query.pageSize || 8);
    try {
        // const totalNotifications = await Notification.countDocuments();
        // console.log(totalNotifications, 'totalNotifications');
        // const notifications = await Notification.find({})
        //     .sort({ createdAt: -1 })
        //     .skip((page - 1) * pageSize)
        //     .limit(pageSize);
        // console.log('notifications', notifications);
        // res.json({
        //     notifications,
        //     totalPages: Math.ceil(totalNotifications / pageSize),
        //     currentPage: page,
        // });
        // console.log(res.json, 'res.json');


        const { userId } = req.params
        const notifications = await Notification.find({ receiverId: userId }).sort({ createdAt: -1 })
        res.json(notifications)


    } catch (error) {
        return res.status(500).json(error.message);
    }
};
