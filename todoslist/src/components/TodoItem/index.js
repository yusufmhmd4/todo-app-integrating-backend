import { formatDistanceToNow } from "date-fns";
import DeleteTodo from "../DeleteTodo";
import EditTodo from "../EditTodo";

import "./index.css";

const TodoItem = (props) => {
  const { todo, getTodosData } = props;
  const { taskId, title, description, completed, createdAt } = todo;
  const isCompltedTask = completed == 1 ? "text" : ""; // completed todo stying text decoration line through
  return (
    <li className="todoItem">
      <div className="name-container">
        <h4 className={`todoItem-title ${isCompltedTask}`}>{title}</h4>
        <div className="icon-container">
          <EditTodo // edit todo component
            title={title}
            description={description}
            completed={completed}
            taskId={taskId}
            getTodosData={getTodosData}
          />

          <DeleteTodo // delete todo components
            taskId={taskId}
            getTodosData={getTodosData}
          />
        </div>
      </div>
      <div className="content-container">
        <p className={`todoItem-description ${isCompltedTask}`}>
          {description}
        </p>
        <span className="todoItem-time">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })
            .split(" ")
            .slice(-3)
            .join(" ")}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
