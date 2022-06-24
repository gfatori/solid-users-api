import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.get("user_id");
    // if (!user || user.admin === false) {
    //   throw new Error("No permission");
    // }
    try {
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    } catch (err) {
      response.status(400).send({ error: "User doesnt not exist." });
    }
  }
}

export { ListAllUsersController };
