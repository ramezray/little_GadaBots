const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require("body-parser");

const users =  require("./routes/api/users")
const auth =  require("./routes/api/auth")
const bots =  require("./routes/api/bots")

const app = express();

app.use(bodyParser.json());
const db = require("./config/Keys").mongoURI;


// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use("/api/bots", bots);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server started on port ${port}`));


