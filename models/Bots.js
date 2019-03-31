const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require('path');


const botSchema = new Schema({
      name: { type: String, required: true },
      checkIns:[
            {
            pic: { type: String, required: true },
            location: { type: String, required: true },
            journalEntry: { type: String, required: true },
            date: { type: Date, default: Date.now }
            }
      ],
      userid: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

module.exports = Bot = mongoose.model("bot", botSchema);

