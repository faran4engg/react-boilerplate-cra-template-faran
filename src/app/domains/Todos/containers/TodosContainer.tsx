import { FC, memo } from 'react';

import { getAllTodos } from './queries';

import { OwnProps, RenderProps } from './types';
import { useQuery } from 'react-query';

const TodosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { isLoading, error, data } = useQuery('todos', getAllTodos, {
    refetchOnWindowFocus: false,
    suspense: true,
  });

  if (isLoading) return <h1>Loading...'</h1>;

  if (error) return <p>An error has occurred'</p>;

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading: false,
        todos: data,
      })}
    </div>
  );
};

export default memo(TodosContainer);
