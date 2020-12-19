import todosInstance from 'app/axios/todos-instance';

import { TodosAPI } from './types';

const getAllTodos = async (): Promise<TodosAPI[]> =>
  await todosInstance.get('/todos');

export { getAllTodos };
