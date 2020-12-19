import { useEffect, useCallback, FC } from 'react';

import { getAllTodos } from 'app/apis/calls';

import { OwnProps, RenderProps } from './types';

const TodosContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const getTodos = useCallback(async () => {
    try {
      const { data } = await getAllTodos();
      console.log({ data });
    } catch (error) {}
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      getTodos(); // simulating delay jsut to show loaders :)
    }, 2000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [getTodos]);

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading: false,
        todos: [],
      })}
    </div>
  );
};

export default TodosContainer;
