export type AuthType = {
  email: string;
  password: string;
};

export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
};
