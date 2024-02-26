import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {

      const { user } = req.body;

      const createUserService = container.resolve();
      const userCreated = createUserService.

    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    try {
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    try {
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
