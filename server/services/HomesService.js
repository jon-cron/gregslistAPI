import { dbContext } from "../db/DbContext.js"




class HomesService{

 async getAll(){
  const homes = await dbContext.Homes.find()
  return homes
  }

}

export const homesService = new HomesService()