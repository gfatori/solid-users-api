import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      this.createUserUseCase.execute({ name, email });
    } catch (e: any) {
      response.send(400);
    }
    return response.status(201).send();
  }
}

export { CreateUserController };
