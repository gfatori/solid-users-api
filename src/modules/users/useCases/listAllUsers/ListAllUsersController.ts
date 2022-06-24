import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.get("user_id");

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return response.status(400).send({ error: message });
    }
  }
}

export { ListAllUsersController };
