const { Schema, model } = require("mongoose")

const Postchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        links: [
            {
                type: String,
            }
        ],
        image: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true
    }
)

const Post = model("Work", workSchema)
module.exports = Work
