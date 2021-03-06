const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const { User } = require("./user");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  place: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  date: Date,
  attendees: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  tags: {
    type: String,
  },
});

/*userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};*/

const Event = mongoose.model("event", eventSchema);

function validateEvent(event) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(5).max(255).required(),
    place: Joi.string().min(5).max(255).required(),
    date: Joi.date(),
    tags: Joi.string(),
    attendees: Joi.array().items(Joi.objectId()),
  });

  return schema.validate(event);
}

exports.Event = Event;
exports.validate = validateEvent;
