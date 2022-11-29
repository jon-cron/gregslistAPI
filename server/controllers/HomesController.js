import { homesService } from "../services/HomesService.js";
import BaseController from "../utils/BaseController.js";




export class HomesController extends BaseController{
  constructor(){
    super('api/homes')
    this.router
    .get('', this.getAll)
    .post('', this.create)
  }
  async getAll(req, res, next){
    try {
      const homes = await homesService.getAll()
      return homes
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next){
    try {
      
    } catch (error) {
      next(error)
    }
  }
}