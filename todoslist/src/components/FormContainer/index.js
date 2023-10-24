import {
    TitleInput,
    FormDataContainer,
    TextareaInput,
    FormButton
  } from "../../styledComponent"; // styled components
  
  import "./index.css";
  
  const FormContainer = (props) => {
    console.log(props);
    const {
      title,
      description,
      onChangeTitle,
      onChangeDescription,
      getTodosData
    } = props; // accessing props from parameters
  
    const addNewTodo = async (e) => {
      e.preventDefault();
      if (title === "") {
        alert("Title cannot be empty"); // Input Title element can't be empty
        return;
      } else if (description === "") {
        alert("Description cannot be empty"); // Input description element can't be empty
        return;
      } else {
        const url = "https://todo-backend-production-2c59.up.railway.app/todos";
        const newTodo = {
          title,
          description,
          completed: 0
        };
  
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTodo)
        };
  
        try {
          const result = await fetch(url, options); // adding new todo
          if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
          }
  
          const textResponse = await result.text();
          // console.log(textResponse);
          onChangeTitle("");
          onChangeDescription("");
          getTodosData(); // calling getTodos method to refresh and display new upated data
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }
      }
    };
  
    return (
      <FormDataContainer className="form-container" onSubmit={addNewTodo}>
        <div className="input-container">
          <label className="label" htmlFor="title">
            TITLE
          </label>
          <TitleInput // styled component of input
            type="text"
            id="title"
            placeholder="Enter Title"
            onChange={(e) => onChangeTitle(e.target.value)} // updating title text
            value={title}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="description">
            DESCRIPTION
          </label>
  
          <TextareaInput
            rows="6"
            className="input"
            type="textarea"
            id="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => onChangeDescription(e.target.value)} // updating description text
          />
        </div>
        <FormButton type="submit">Add</FormButton>
      </FormDataContainer>
    );
  };
  
  export default FormContainer;
  