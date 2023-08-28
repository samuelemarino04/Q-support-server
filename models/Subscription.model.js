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
            type: String,
            required: true
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
