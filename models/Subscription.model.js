const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'title field must be filled']
        },
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        image: {
            type: String,
        },
        type: {
            type: String,
            enum: ['Basic', 'Premium', 'Pro']
        },
        price: {
            type: Number,
            required: [true, 'you must set a price']
        },
        currency: {
            type: String,
            enum: ['$', '€', '£', '¥', 'CHF', 'CAD', 'AUD', 'NOK', 'SEK', 'NZD']
        },
        paymentFrequency: {
            type: String,
            enum: ['monthly', 'quarterly', 'annually'],
            default: 'monthly'
        },
        description: {
            type: String,
            required: [true, 'you should describe this subscription']
        },
        startDate: {
            type: Date,
            // required: true
        },
        endDate: {
            type: Date
        },
        paymentMethod: {
            card: {
                cardHolder: {
                    type: String,
                },
                cardNumber: {
                    type: Number,
                    validate: {
                        validator: value => value.length === 16,
                        message: 'Card number is not correct'
                    }
                },
                cvv: {
                    type: Number,
                    maxlenght: [3, 'Card CVV format is not correct'],
                    minlenght: [3, 'Card CVV format is not correct'],
                },
            },
        },
    },
    {
        timestamps: true
    }
);

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;
