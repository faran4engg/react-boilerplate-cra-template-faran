import { AxiosResponse } from 'axios';
import todosInstance from 'app/axios/todos-instance';

import { TodosAPI } from './types';

const getAllTodos = (): Promise<AxiosResponse<TodosAPI[]>> =>
  todosInstance.get('/todos');

export { getAllTodos };
