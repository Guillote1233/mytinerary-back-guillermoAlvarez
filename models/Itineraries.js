import { Schema, model, Types } from "mongoose";

const itinerarySchema = Schema({
    cityId:{type: Schema.Types.ObjectId, ref:'City', required:true},
    itineraryName: {type:String, required:true},
    price: {type:Number, required:true},
    duration: {type:String, required:true},
    urlImage:{type:String, required:true},
    profilePicture:{type:String, required:true},
    profileName:{type:String, required:true},
    likes:{type:Number, required:true},
    hashtags:{type:String},
    comment: {type:String}
},{
    timestamps: true
});

const Itinerary = model('itineraries', itinerarySchema);

export default Itinerary;