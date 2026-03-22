const mongoose = require("mongoose");

const studioProjectStatusOptions = [
  "ideas",
  "planning",
  "production",
  "review",
  "finished",
];

const studioProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    assignedArtist: {
      type: String,
      required: true,
      trim: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: studioProjectStatusOptions,
      default: "ideas",
    },
  },
  {
    timestamps: true,
  },
);

studioProjectSchema.set("toJSON", {
  transform: function transformDocument(doc, ret) {
    ret.id = ret._id.toString();
    ret.deadline = ret.deadline.toISOString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const StudioProject = mongoose.model("StudioProject", studioProjectSchema);

module.exports = {
  StudioProject,
  studioProjectStatusOptions,
};
