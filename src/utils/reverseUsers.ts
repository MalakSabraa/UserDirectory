import { User } from "../types/User";

export function reverseUsers(users: User[]): User[] {
  return [...users].reverse();
}
