const mongoose = require("mongoose");

const clientRequestStatusOptions = ["new", "reviewing", "in progress", "completed"];

const clientRequestSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    projectType: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    budget: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: clientRequestStatusOptions,
      default: "new",
    },
  },
  {
    timestamps: true,
  },
);

clientRequestSchema.set("toJSON", {
  transform: function transformDocument(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const ClientRequest = mongoose.model("ClientRequest", clientRequestSchema);

module.exports = {
  ClientRequest,
  clientRequestStatusOptions,
};
