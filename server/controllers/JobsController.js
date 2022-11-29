import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";






export class JobsController extends BaseController{
  constructor(){
    super('api/jobs')
    this.router
    .get('', this.getAll)
    .post('', this.create)
  }

 async getAll(req, res, next){
    try {
      const jobs = await jobsService.getAll()
      return res.send(jobs)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next){
    try {
      const job = await jobsService.create(req.body)
      return res.send(job)
    } catch (error) {
      next(error)
    }
  }
}