import { Helmet } from 'react-helmet-async';
import { TodoCard } from 'app/domains/Todos/components/todo-card';
import TodosContainer from 'app/domains/Todos/containers';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <TodosContainer>{props => <TodoCard {...props} />}</TodosContainer>
    </>
  );
};

export default HomePage;
