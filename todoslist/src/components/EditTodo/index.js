import { useState } from "react";
import Popup from "reactjs-popup";
import { BiPencil } from "react-icons/bi";
import { TitleInput, TextareaInput, FormButton } from "../../styledComponent";

import "./index.css";

const EditTodo = ({ taskId, title, description, completed, getTodosData }) => {
  const [newTitle, changeNewTitle] = useState(title); // new editable text
  const [newDescription, changeNewDescripion] = useState(description);
  const [isCompleted, changeIsCompleted] = useState(completed);

  const toggleIsCompleted = () => {
    changeIsCompleted(isCompleted === 0 ? 1 : 0); // editing completed as 0 or 1
  };

  const updateTodo = async (close) => {
    if (newTitle === "") {
      alert("Title not be empty");
      return;
    }
    const url = `https://todo-backend-production-2c59.up.railway.app/todos/${taskId}`;

    const newTodo = {
      title: newTitle,
      description: newDescription,
      completed: isCompleted
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    };

    const response = await fetch(url, options);
    const result = await response.text();
    getTodosData();
    close();
    // console.log(result);
  };
  return (
    <div className="popup-container">
      <Popup // react popup for diaplaying popup
        modal
        trigger={
          // trigger button
          <button
            type="button"
            className="todoItem-icon-button"
            title="Edit Task" // tool tip
          >
            <BiPencil className="react-icon edit" />
          </button>
        }
      >
        {(close) => (
          <div className="change-input-container">
            <TitleInput
              type="text"
              value={newTitle}
              onChange={(e) => changeNewTitle(e.target.value)}
            />
            <TextareaInput
              type="text"
              value={newDescription}
              onChange={(e) => changeNewDescripion(e.target.value)}
            />
            <label className="completed">
              Completed:
              <input
                type="checkbox"
                checked={isCompleted === 1}
                onChange={toggleIsCompleted}
              />
            </label>
            <div className="button-container">
              <FormButton
                type="button"
                className="update-button"
                onClick={() => updateTodo(close)}
              >
                Update
              </FormButton>
              <FormButton
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </FormButton>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default EditTodo;
