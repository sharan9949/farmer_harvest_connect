import users from "../data/users";

export const loginUser = (name) => {
  return users.find((user) => user.name === name);
};