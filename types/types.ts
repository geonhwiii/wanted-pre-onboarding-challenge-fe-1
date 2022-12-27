export type JoinResponse = {
  data: {
    message: string;
    token: string;
  };
};

export type LoginResponse = JoinResponse;

export type Todo = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

export type TodoResponse = {
  data: {
    data: Todo[];
  };
};
