const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
    {
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        creative: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        type: {
            type: String,
            enum: ['Basic', 'Premium', 'Pro']
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date
        },
        paymentMethod: {
            card: {
                cardHolder: {
                    type: String,
                    required: [true, 'card holder is required.'],
                },
                cardNumber: {
                    type: Number,
                    maxlenght: 16,
                    minlenght: 16,
                    required: [true, 'Card Number should have 16 digits']
                },
                cvv: {
                    type: Number,
                    maxlenght: 3,
                    minlenght: 3,
                    required: [true, 'CVV should have 3 digits']
                },
            },
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Paid', 'Failed']
        }
    },
    {
        timestamps: true
    }
);

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;
