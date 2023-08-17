import { Schema, model, Types } from "mongoose";

const citySchema = Schema({
    name:{type:String, required:true},
    country:{type:String, required:true},
    url:{type:String, required:true},
},{
    timestamps: true
});

const City = model('cities',  citySchema);

export default City