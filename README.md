# GadaBots

Check out GadBots Here!: [this is where we put a link to the heroku page]

### About This App

This app is to promote global communication. So often in our digital lives we become isolated in our communities. This app allows people to hear firsthand what the lives of their fellow humans are like around the globe. There are no like, no dislikes, no votes of any kind. only the amount of places your GadaBot has visited.

### Imported Packages

Inpert all with `npm i`

`import React, { Component } from "react";`

`import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";`

`import {`

`Container,`

`Button,`

`Card,`

`CardTitle,`

`CardText,`

`CardImg`

`} from "reactstrap";`

`import { BrowserRouter as Router, Link } from "react-router-dom";`

`import { connect } from 'react-redux';`

`import PropTypes from 'prop-types';`

`import ReactS3Uploader from "react-s3-uploader";`

`import axios from "axios";`

`const wtf = require("wtf_wikipedia");`

`const jwt = require('jsonwebtoken');`

`const mongoose = require("mongoose");`

`const path = require('path');`

### Site Strucure

How the site is strucured: https://drive.google.com/file/d/1Qylgo9EnG4TXb_E_XC5irQwpViv1uAim/view?usp=sharing
Our MVC: https://docs.google.com/presentation/d/1bK1Omsm5Zd1G4l3Bk6Gy95xzOu6yZQqkmx14kR-R3AY/edit?usp=sharing

###How To Use Our APP
FOR THE HOME PAGE

Welcome to GadaBots!

You've found a place where you can create your own little robot (a GadaBot)and send it on an incredible adventure around the world! What's more, you'll be able to track and see all the locations your little GadaBot visits and learn about these places too. Read our FAQ to learn more.

---

FOR THE FAQ PAGE

Q. How does this work?

A. You ("Person A") create a GadaBot and an account. (Be sure to write the provided tracking number on the back of your Bot!) You can color your Bot and choose a name for it. The city you create it in becomes its hometown. Take a picture or two of your Bot with the local places it visits in the background and write a few sentences about what your Bot got to see and do in its hometown. Then, mail (postal mail) your Bot to someone you know anywhere in the world ("Person B"). Person B then visits the Check In Page on GadaBots and with its tracking number, checks in the next place in the Bot's trip and uploads a photo or two of your Bot enjoying the sights of its new location. Person B also includes a journal entry about your Bot's visit. Person B then mails it to someone else ("Person C") they know and the process repeats.

Q. I'm ready to create a Gadabot, how do I get started?

A. Great! It's easy. Register for a free account here.

Then print out and color your GadaBot however you'd like. Here is a template for you to use. It's best if you can attach your GadaBot to some sort of firm backing like heavy paper to keep your robot strong and healthy. If you have access to a laminator, your GadaBot would love to be laminated as an extra layer of protection!

**\***IMPORTANT**\*** Be sure to include the tracking number on the back of your GadaBot. It's super important! That's how you can follow your Bot's fantastic voyage. The people who receive your Bot in the mail need it to update your Bot's trip.

Write a journal entry about what your GadaBot saw and upload a picture or two of your Gadabot enjoying the sights during its visit with you. Then mail (postal mail) the Bot to someone else you know who would like to host the bot for a visit. That person will then go through the same process you did. We have a simple instruction sheet for you to include with your Bot.

Q. A friend just sent me a GadaBot. What do I do now?

Go to the GadaBot's CheckIn page. (You'll need the Bot ID on the back of the Bot.) Write a journal entry about what your GadaBot saw and upload a picture or two of your Gadabot enjoying the sights during its visit with you. Then mail (postal mail) the Bot to someone else you know who would like to host the bot for a visit. That person will then go through the same process you did. We have a simple instruction sheet for you to inlcude with your Bot.

Q. What if my Bot gets damaged or goes missing?

A. That can sometimes be sad, but fortuntately you have the option to create a brand new Bot with a new name, new Bot ID# and a new journey. Simply register for a new account and create a new Bot.

Or, if the Bot disappears or gets damaged during its visit with you can give the Bot a new body but keep its original name and original BotID. In this case print out a new Bot from our template and use the same ID as the original missing or damaged Bot. Try to color the Bot as close to the original as possible.

Q. Where does the name "GadaBot" come from?

A. GadaBot is a play on words based on the term "gadabout" which means wanderer or globetrotter.

Q. Where did the idea of GadaBots come from?

A. The 1960s children's book titled Flat Stanley by Jeff Brown served as original inspiration for this project. In the 1990s a Canadian teacher named Dale Hubert originated the Flat Stanley Project where his students would send paper cutouts of the boy Stanley to people who when then take pictures of Stanley, write about what Stanley saw and did and then send them back directly to the students. We thought we could capture the power of the Web and have our GadaBots (Stanleys) continue on their journeys indefinitely instead of being sent back directly to the students. The Internet thus provides the way the GadaBot creator and recipients can see their Bots take one big multi-stop adventure.

Q. Who is behind GadaBots?

GadaBots was created in 2019 with love and sweat by Ray Wasif, Kristen Johanson, Huiying (Jojo) Wang, Stephanie Hutchinson, and Heidi Jansen van Rensburg as our Final Group Project for the University of Washington's Full-Stack Web Development Boot Camp. We hail from four different countries and are enthusiastic about spreading the interconnectedness of our world with the youth (and adults) of today.
