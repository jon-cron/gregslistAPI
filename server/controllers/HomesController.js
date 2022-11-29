import { dbContext } from "../db/DbContext.js";
import { homesService } from "../services/HomesService.js";
import BaseController from "../utils/BaseController.js";




export class HomesController extends BaseController{
  constructor(){
    super('api/homes')
    this.router
    .get('', this.getAll)
    .post('', this.create)
    .delete('/:id', this.remove)
    .put('/:id', this.update)
  }
  async getAll(req, res, next){
    try {
      const homes = await homesService.getAll()
      return res.send(homes)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next){
    try {
      const home = homesService.create(req.body)
      return res.send(home)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next){
    try {
      const message = await homesService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
  async update(req, res, next){
    try {
      const updated = await homesService.update(req.params.id, req.body)
      return res.send(updated)
    } catch (error) {
      next(error)
    }
  }
}