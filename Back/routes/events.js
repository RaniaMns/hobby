const express = require("express");
const router = express.Router();
const _ = require("lodash");
const auth = require("../middleware/auth");
const { Event, validate } = require("../models/event");

router.get("/", auth, async (req, res) => {
  const event = await Event.findOne(req.body.name);

  res.send(event);
});

router.post("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let event = await Event.findOne({ name: req.body.name });
  if (event) return res.status(400).send("Event already registered.");

  event = new Event(_.pick(req.body, ["name", "description", "place", "date"]));
  await event.save();

  res.send(_.pick(event, ["_id", "name", "description", "place", "date"]));
});

router.delete("/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let event = await Event.findByIdAndRemove({ id: req.params.id });
  if (event) return res.status(400).send("Event already registered.");

  if (!event)
    return res.status(404).send("The event with the given ID was not found.");

  res.send(event);
});

module.exports = router;
