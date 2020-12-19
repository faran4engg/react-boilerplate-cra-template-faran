import { FC } from 'react';

import { getAllTodos } from './queries';

import { OwnProps, RenderProps } from './types';
import { useQuery } from 'react-query';

const TodosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { isLoading, error, data } = useQuery('todos', getAllTodos, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <h1>Loading...'</h1>;

  if (error) return <p>An error has occurred'</p>;

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {console.log(data)}
      {children({
        isLoading: false,
        todos: [],
      })}
    </div>
  );
};

export default TodosContainer;
