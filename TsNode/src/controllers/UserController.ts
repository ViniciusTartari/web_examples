import { Request, Response } from 'express'

import { User } from '../schemas/User'

class UserController {
  // CRUD classico
  // Create
  public async create (req:Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }

  // Read
  public async read (req: Request, res: Response): Promise<Response> {
    if ('id' in req.params) {
      const user = await User.findById(req.params.id)
      return res.json(user)
    }
    const users = await User.find({})
    return res.json(users)
  }

  // Update
  public async update (req:Request, res: Response): Promise<Response> {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(user)
  }

  // Delete
  public async delete (req:Request, res:Response): Promise<Response> {
    await User.findByIdAndDelete(req.params.id)
    return res.sendStatus(200)
  }
}

export default new UserController()
