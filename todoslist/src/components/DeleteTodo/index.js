import { AiOutlineDelete } from "react-icons/ai";

import "./index.css";

const DeleteTodo = (props) => {
  const { taskId, getTodosData } = props;

  const onDeleteTodoItem = async () => {
    const url = `https://todo-backend-production-2c59.up.railway.app/todos/${taskId}`; // deleted todo based on todoId

    const options = {
      method: "DELETE"
    };
    const result = await fetch(url, options);
    const response = await result.text();
    getTodosData();
    //  console.log(response);
  };
  return (
    <button
      type="button"
      className="todoItem-icon-button"
      onClick={onDeleteTodoItem} // calling function when clicking delete button
      title="Delete Task"
    >
      <AiOutlineDelete
        className="react-icon" // recat icons
      />
    </button>
  );
};

export default DeleteTodo;
