const { Schema, model } = require("mongoose");

const creativeSchema = new Schema(
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
        images: [{
            type: String,
        }],
        audioFiles: [{
            type: String,
        }],

        subscriptions: [{
            type: Schema.Types.ObjectId,
            ref: 'Client',
        }]
    },
    {
        timestamps: true
    }
);

const Creative = model("Creative", creativeSchema);

module.exports = Creative;
