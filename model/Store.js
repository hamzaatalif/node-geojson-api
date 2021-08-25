const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true,"Please provide a store id."],
        unique: true,
        trim: true,
        maxLength: [10,"Store id must be less than 10 characters."]
    },
    address: {
        type: String,
        required: [true,"Address must be provided."]
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress: {
            type: String,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// geocode & create location

StoreSchema.pre('save',async (next) => {
    const loc = await geocoder.geocode(this.address);
    console.log(loc);
});

module.exports = mongoose.model("Store", StoreSchema);