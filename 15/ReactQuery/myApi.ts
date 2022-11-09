import client from './client';

export type TodoTypes = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const getTodo = async (id: number) => {
  const response = await client.get<TodoTypes>(`todos/${id}`);
  return response.data;
};
