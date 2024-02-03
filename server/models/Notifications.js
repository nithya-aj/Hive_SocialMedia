    import mongoose from 'mongoose'

    const NotificationSchema = new mongoose.Schema({
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        type: {
            type: String,
            enum: ['like', 'comment'],
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        read: {
            type: Boolean,
            default: false
        },
    }, {
        timestamps: true
    })

    const Notification = mongoose.model("Notification", NotificationSchema)
    export default Notification
