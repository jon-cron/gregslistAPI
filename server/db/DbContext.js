import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from "../models/car.js";
import { HomeSchema } from "../models/Home.js";
import { JobSchema } from "../models/Job.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Cars = mongoose.model('Car', CarSchema) // TODO after setting up model

  Homes = mongoose.model('Home', HomeSchema)

  Jobs = mongoose.model('Job', JobSchema)
}

export const dbContext = new DbContext()
