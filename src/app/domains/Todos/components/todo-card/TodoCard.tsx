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

    <div className="flex flex-col justify-center items-center max-w-sm mx-auto">
      <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
      </div>
      <br />
      <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
        <h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          Nike Revolt
        </h3>

        <div className="flex items-center justify-between py-2 px-3 bg-gray-200">
          <span className="text-gray-800 font-bold ">$129</span>
          <button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
            Add to cart
          </button>
        </div>
      </div>
      <br />

      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        <img
          className="w-full h-56 object-cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <div className="py-5 text-center">
          <a href="/" className="block text-2xl text-gray-800 font-bold">
            John Doe
          </a>
          <span className="text-sm text-gray-700">Software Engineer</span>
        </div>
      </div>
      <br />

      <div className="flex max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-cover">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-gray-800 font-bold text-2xl">Backpack</h1>

          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>

          <div className="flex item-center mt-2">
            <svg
              className="w-5 h-5 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 fill-current text-gray-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 fill-current text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 fill-current text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </div>

          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-lg md:text-xl">$220</h1>
            <button className="px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit esse
      unde repudiandae exercitationem impedit nostrum obcaecati blanditiis
      cupiditate eveniet quaerat ipsum a eaque doloremque aliquid, deleniti rem
      iste porro consequuntur possimus reiciendis beatae!
    </p>
  </>
);

export default TodoCard;
