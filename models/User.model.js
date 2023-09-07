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
        flag: {
            type: String,
            enum: [
                "https://emojiflags.avris.it/flags/Asexual.png",
                "https://emojiflags.avris.it/flags/Bisexual.png",
                "https://emojiflags.avris.it/flags/Genderfluid.png",
                "https://emojiflags.avris.it/flags/Intersex.png",
                "https://emojiflags.avris.it/flags/Lesbian.png",
                "https://emojiflags.avris.it/flags/Nonbinary.png",
                "https://emojiflags.avris.it/flags/Pansexual.png",
                "https://emojiflags.avris.it/flags/Progress_Pride.png",
                "https://emojiflags.avris.it/flags/Queer.png",
                "https://emojiflags.avris.it/flags/Transgender.png",
            ]
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
            type: String,
            default: 'https://i.stack.imgur.com/l60Hf.png'
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
                maxlength: [30, 'Maximum name length is 24']
            },
            cardNumber: {
                type: Number,
                validate: {
                    validator: function (value) {
                        return value.toString().length === 16;
                    },
                    message: 'Card number must be 16 characters'
                }
            },
            expiringDate: {
                type: String,
                maxlength: [5, 'Date length must be 4 in format MM/YY']
            },
            cvv: {
                type: Number,
                validate: {
                    validator: function (value) {
                        return value.toString().length === 16;
                    },
                    message: 'Card number must be 16 characters'
                }
            },
        },
    },
    {
        timestamps: true
    }
);

const User = model("User", userSchema);

module.exports = User;
