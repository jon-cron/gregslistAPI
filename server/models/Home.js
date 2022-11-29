import { model, Schema } from "mongoose";






export const HomeSchema = new Schema({
  
  bedrooms: {type: Number, required: true},
  bathrooms: {type: Number, required: true},
  levels: {type: Number, required: true},//required means it has to have a value to be stored
  imgUrl: {type: String, required: true, maxLength: 255},
  year: {type: Number, required: true},
  price: {type: Number, required: true, default: 1},
  description: {type: String},
}, 
{ timestamps: true, toJSON: { virtuals: true } })