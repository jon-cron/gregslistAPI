import { dbContext } from "../db/DbContext.js"




class JobsService{

 async getAll(){
    const jobs = await dbContext.Jobs.find()
    return jobs
  }
  async create(jobData){
    const newJob = await dbContext.Jobs.create(jobData)
    return newJob
  }

}

export const jobsService = new JobsService()