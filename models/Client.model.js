const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      max: 24
    },
    avatar: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    age: {
      type: Number,
      min: 18,
      required: [true, 'Age is required.']
    },
    pronouns: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      min: 7,
      max: 24
    },
    subscriptions: [{
      type: Schema.Types.ObjectId,
      ref: 'Creative',
    }]
  },
  {
    timestamps: true
  }
);

const Client = model("Client", clientSchema);

module.exports = Client;
