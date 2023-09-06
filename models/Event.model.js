const { Schema, model } = require('mongoose')
const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required.']
        },
        icon: {
            type: String,
            default: '#',
            required: [true, 'icon is required.']
        },
        description: {
            type: String,
            default: 'there is no description.',
            required: [true, 'description is required.']
        },
        attendees: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        address: {
            type: String,
            required: [true, 'address is required.']
        },
        location: {
            type: {
                type: String,
                default: 'Point'
            },
            coordinates: {
                type: [Number]
            }
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        date: {
            type: Date,
            required: [true, 'date is required.']
        },
        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps: true
    }
)

const Event = model("Event", eventSchema)

module.exports = Event