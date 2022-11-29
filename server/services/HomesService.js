import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"




class HomesService{

 async getAll(){
  const homes = await dbContext.Homes.find()
  return homes
  }

  async create(homeData){
    const newHome = await dbContext.Homes.create(homeData)
    return newHome
  }
  async remove(id){
    const home = await dbContext.Homes.findById(id)
    if(!home) throw new BadRequest('no home at this id' + id)
    await home.remove()
    return `deleted ${home.year}`
  }

  async update(id, homeData){
    const original = await dbContext.Homes.findById(id)
    if(!original) throw new BadRequest('no home at this id' + id)

    original.bedrooms = homeData.bedrooms ? homeData.bedrooms : original.bedrooms
    original.bathrooms = homeData.bathrooms ? homeData.bathrooms : original.bathrooms
    original.price = homeData.price ? homeData.price : original.price
    original.imgUrl = homeData.imgUrl ? homeData.imgUrl : original.imgUrl
    original.year = homeData.year ? homeData.year : original.year
    original.description = homeData.description ? homeData.description : original.description

    await original.save()

  return original
  }

}

export const homesService = new HomesService()