import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return response.status(404).json({ error: message });
    }
  }
}

export { ShowUserProfileController };
