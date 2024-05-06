import { createId } from "@/shared/lib/id";
import { userRepository } from "../_repositories/user.repository";
import { ROLES, UserEntity } from "../_domain/types";

type CreateUser = {
  email: string;
  name?: string | null;
  image?: string | null;
  emailVerified?: Date | null;
};

export class CreateUserUseCase {
  async exec(data: CreateUser) {
    const role = ROLES.USER;

    const user: UserEntity = {
      id: createId(),
      role,
      ...data,
    };

    await userRepository.createUser(user);

    return user;
  }
}

export const createUserUseCase = new CreateUserUseCase();
