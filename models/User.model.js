const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required.'],
            maxlength: [24, 'Maximum name length is 24']
        },

        role: {
            type: String,
            enum: ["USER", "CREATIVE", "ADMIN"],
        },
        imageUrl: {
            type: String,
            default: 'https://i.stack.imgur.com/l60Hf.png'
        },
        birth: {
            type: Date
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
        },
        images: [{
            type: String,
        }],
        audioFiles: [{
            type: String,
        }]
    },
    {
        timestamps: true
    }
);

const User = model("User", userSchema);

module.exports = User;
