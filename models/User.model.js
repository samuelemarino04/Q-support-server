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
            required: [true, 'Role is required.']
        },
        avatar: {
            type: String,
            default: 'https://i.stack.imgur.com/l60Hf.png'
        },
        birth: {
            type: Date,
            required: [true, 'Birth is required.']

        },
        category: {
            type: String,
            enum: ["Web Developer",
                "Musician",
                "Visual artist",
                "Writer",
                "Illustrator",
                "Video Creator",
                "Gaming Creator",
                "Podcast Creator",
                "Non-profit",
                "Local Business",
                "Tutorials Creator"],
            required: [true, 'Category is required.']
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
        aboutInfo: {
            type: String,
        },
        backgroundImage: {
            type: String
        },
        Posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post',
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required.']
        },
        images: [{
            type: String,
        }],
        audioFiles: [{
            type: String,
        }],
        cardData: {
            cardHolder: {
                type: String,
            },
            cardNumber: {
                type: Number,
            },
            expiringDate: {
                type: String,
            },
            cvv: {
                type: Number,
            },
        },
    },
    {
        timestamps: true
    }
);

const User = model("User", userSchema);

module.exports = User;
