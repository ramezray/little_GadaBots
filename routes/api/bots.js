const express = require("express");
const router = express.Router();

const Bot = require("../../models/Bots");

//get all bots
router.get("/", (req, res) => {
  Bot.find().then(bots => res.json(bots));
});

//post new bot
router.post("/", (req, res) => {
  const newBot = new Bot({
    name: req.body.name,
    checkIns: {
      pic: req.body.pic,
      location: req.body.location,
      journalEntry: req.body.journalEntry
    },
    userid: req.body.userid
  });
  newBot.save().then(bot => res.json(bot));
});

//get one bot
router.get("/:id", (req, res) => {
  Bot.findById(req.params.id).then(bots => res.json(bots));
});

//delete bot by using id
router.delete("/:id", (req, res) => {
  Bot.findById(req.params.id)
    .then(bot => bot.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//update bot by using id
router.put("/:id", (req, res) => {
  console.log(req.body, req.params.id);
  Bot.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, bot) => {
      if (error) return res.status(500).send(error);
      return res.send(bot);
    }
  );
});

module.exports = router;
