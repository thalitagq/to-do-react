import { PlusCircle } from "@phosphor-icons/react";
import { ToDoFormContainer } from "./styles";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

export function TodoForm() {
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useContext(TasksContext)
  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setTaskDescription(event.target.value)
  }

  function handleAddTask(){
    addTask(
      { description: taskDescription, 
        id: String(new Date().getTime()), 
        done: false 
      });
  }

  return (
    <ToDoFormContainer>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={handleDescriptionChange}
      />
      <button type="button" onClick={handleAddTask}>
        Criar <PlusCircle size={16} />
      </button>
    </ToDoFormContainer>
  );
}
