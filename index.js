const mongoose = require("mongoose");

mongoose.connect("mongodb+srv:/0.18s8vt9.mongodb.net/userappnew")

const user = mongoose.model('users',{ name: string ,email: string,  password: string});

const user = new user({
  name: 'karan',
  email: 'fdsfdfsg@gmail.com',
  password: '123456'
});

user.Save();