import { ReactNode } from 'react';

interface ChildrenProps {
  isLoading: boolean;
  todos: [];
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
export interface TodosAPI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
