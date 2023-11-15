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
      min: 30,
      max: 100,
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
          likedAt: { type: Date },
        },
      ],
    },
    bookmarkedBy: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          bookmarkedAt: { type: Date },
        },
      ],
    },
    hidden: {
      type: Boolean,
      default: false,
      hiddenAt: { type: Date },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
