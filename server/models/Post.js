import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 3 && v.length <= 100;
        },
        message: (props) =>
          `${props.value} must be between 30 and 100 characters!`,
      },
    },
    imageUrl: {
      type: String,
      required: true,
    },
    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
      likedAt: { type: Date },
    },
    bookmarkedBy: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
      bookmarkedAt: { type: Date },
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    hiddenAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
