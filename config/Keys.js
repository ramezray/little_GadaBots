module.exports = {
  mongoURI:
    process.env.MONGODB_URI ||
    "mongodb+srv://ramezray:r2005moner@cluster0-kxkcm.mongodb.net/gadabots",
  jwtSecret: process.env.JWT_SECRET || "s00persekrit"
};
