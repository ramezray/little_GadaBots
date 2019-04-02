import axios from "axios";

export default {
  // Gets all saved bots
  getSavedBot: () => {
    return axios.get("/api/bots");
  },
  // Gets all saved Users
  getSavedUser: () => {
    return axios.get("/api/users");
  },
  // Gets the bot with the given id
  getBot: function(id) {
    return axios.get("/api/bots/" + id);
  },
  getBotsByUser: function(userid) {
    return axios.get("api/bots/" + userid);
  },
  // Saves an bot to the database
  saveBot: function(BotData) {
    return axios.post("/api/bots", BotData);
  },
  // add a new check in to a bot in the database
  checkInBot: function(id, BotData) {
    return axios.put("/api/bots/" + id, BotData);
  },
  updateName: function(userid, name) {
    console.log("Updating user. Id: " + userid + ", Name: " + name);
    axios
      .put("/api/users/" + userid, {
        name: name
      })
      .then(
        // Reload the whole page to show the new name
        res => window.location.reload()
      );
  },
  updateUserImage: function(userid, url) {
    console.log("updateUserImage: " + userid + ", " + url);
    axios
      .put("api/users/" + userid, {
        image_url: url
      })
      .then(
        // Reload the whole page to show the new image
        res => window.location.reload()
      );
  }
};
