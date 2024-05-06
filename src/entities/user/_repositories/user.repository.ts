import { dbClient } from "@/shared/lib/db";
import { UserEntity } from "../_domain/types";

export class UserRepository {
  async createUser(user: UserEntity) {
    await dbClient.user.create({
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        image: user.image,
      },
    });
  }
}

export const userRepository = new UserRepository();