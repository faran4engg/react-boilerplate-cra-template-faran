import { TodoCard } from 'app/domains/Todos/components/todo-card';
import TodosContainer from 'app/domains/Todos/containers';
import { FC } from 'react';

const HomePage: FC = () => (
  <TodosContainer>{props => <TodoCard {...props} />}</TodosContainer>
);

export default HomePage;
