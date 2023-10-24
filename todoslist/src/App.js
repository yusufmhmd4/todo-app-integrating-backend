import { useState, useEffect } from "react";
import FormContainer from "./components/FormContainer";
import TodoItem from "./components/TodoItem";
import TabItem from "./components/TabItem";
import "./App.css";

const tabsList = ["ALL", "PENDING", "COMPLETED"]; // initializing tabs list

const App = () => {
  const [title, changeTitle] = useState("");
  const [description, changeDescription] = useState("");
  const [todosList, updateTodosList] = useState([]);
  const [activeTabItem, changeActiveTabItem] = useState(tabsList[0]);

  const changeTabItem = (value) => {
    changeActiveTabItem(value); // Changing activeTabItem
  };

  useEffect(() => {
    getTodosData(); // fetching todos list data from api
  }, []);

  async function getTodosData() {
    const url = "https://todo-backend-production-2c59.up.railway.app/todos/"; // railway domain
    try {
      const response = await fetch(url); // fetching  data
      if (!response.ok) {
        // throwing error if any interrupt occur between fetching
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      const updatedData = result.map((todo) => ({
        taskId: todo.task_id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
        createdAt: todo.created_at
      }));
      updateTodosList(updatedData); // updating Todos List
    } catch (error) {
      console.error("Error fetching data:", error); // logging the error
    }
  }

  const onChangeTitle = (value) => {
    changeTitle(value); // changing title input value
  };

  const onChangeDescription = (value) => {
    changeDescription(value); // changing description input value
  };

  const filteredTodosList = () => {
    let filteredTodosList;
    switch (activeTabItem) {
      case "COMPLETED":
        filteredTodosList = todosList.filter((todo) => todo.completed === 1); // pending tasks list
        break;
      case "PENDING":
        filteredTodosList = todosList.filter((todo) => todo.completed === 0); // completed tasks list
        break;
      default:
        filteredTodosList = todosList;
    }
    return filteredTodosList; // filtering todos list based on activeTabItem
  };

  return (
    <div className="app-container">
      <div className="todos-container">
        <h1 className="todos-heading">Simple Todos</h1>

        <FormContainer
          title={title}
          description={description}
          onChangeTitle={onChangeTitle}
          onChangeDescription={onChangeDescription}
          getTodosData={getTodosData}
        />

        <ul className="tabs-container">
          {tabsList.map((tab) => (
            <TabItem
              key={tab}
              tab={tab}
              changeTabItem={changeTabItem}
              isActive={activeTabItem === tab}
            />
          ))}
        </ul>

        <ul
          className="list-container" // todos item container
        >
          {filteredTodosList().map((todo) => (
            <TodoItem // todo item
              key={todo.task_id}
              todo={todo}
              getTodosData={getTodosData}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
