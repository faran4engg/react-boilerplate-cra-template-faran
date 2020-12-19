import { FC } from 'react';
import { TodosAPI } from 'app/domains/Todos/containers/types';

interface TodoCardProps {
  isLoading: boolean;
  todos?: TodosAPI[];
}
const TodoCard: FC<TodoCardProps> = ({ isLoading, todos }) => (
  <>
    <h1 className="text-6xl">Heading 1</h1>
    <h2 className="text-5xl">Heading 2</h2>
    <h3 className="text-4xl">Heading 3</h3>
    <h4 className="text-3xl">Heading 4</h4>
    <h5 className="text-2xl">Heading 5</h5>
    <h6 className="">Heading 6 </h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit esse
      unde repudiandae exercitationem impedit nostrum obcaecati blanditiis
      cupiditate eveniet quaerat ipsum a eaque doloremque aliquid, deleniti rem
      iste porro consequuntur possimus reiciendis beatae!
    </p>
  </>
);

export default TodoCard;
