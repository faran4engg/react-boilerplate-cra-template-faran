import { AxiosResponse } from 'axios';
import todosInstance from 'app/axios/todos-instance';

import { TodosAPI } from './types';

const getAllTodos = async (): Promise<AxiosResponse<TodosAPI[]>> =>
  await todosInstance.get('/todos');

export { getAllTodos };
