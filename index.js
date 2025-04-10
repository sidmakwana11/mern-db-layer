const mongoose = require("mongoose");
const User = require("./models/User");
const Todo = require("./models/Todo");

module.exports = {
  connect: async (uri) => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully.");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  },
  models: {
    User,
    Todo,
  },
};
