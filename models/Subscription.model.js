const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required.'],
        },
        clients: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        image: {
            type: String,
        },
        type: {
            type: String,
            enum: ['Basic', 'Premium', 'Pro'],
            required: [true, 'Type is required.'],
        },
        price: {
            type: Number,
        },
        currency: {
            type: String,
            enum: ['$', '€', '£', '¥', 'CHF', 'CAD', 'AUD', 'NOK', 'SEK', 'NZD'],
            required: [true, 'Currency is required.'],
        },
        paymentFrequency: {
            type: String,
            enum: ['monthly', 'quarterly', 'annually'],
            default: 'monthly',
            required: [true, 'Frequency is required.'],
        },
        description: {
            type: String,
            required: [true, 'Description is required.']
        },
        startDate: {
            type: Date,
            required: [true, 'Start date is required.']

        },
        endDate: {
            type: Date,
            required: [true, 'End date is required.']
        },
    },
    {
        timestamps: true
    }
);

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;
