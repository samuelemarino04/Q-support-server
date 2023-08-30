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
                },
                cardNumber: {
                    type: Number,
                    maxlenght: 16,
                    minlenght: 16,
                },
                cvv: {
                    type: Number,
                    maxlenght: 3,
                    minlenght: 3,
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
