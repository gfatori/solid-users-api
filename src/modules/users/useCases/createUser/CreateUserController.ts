import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(user);
    } catch (error) {
      // let message: string;
      // if (error instanceof Error) message = error.message;
      // else message = String(error);
      return response.status(400).send({ error: "User already exists" });
    }
  }
}

export { CreateUserController };
