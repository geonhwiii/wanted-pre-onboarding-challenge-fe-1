export type JoinResponse = {
  data: {
    message: string;
    token: string;
  };
};

export type LoginResponse = JoinResponse;

export type TodoResponse = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};
