import { useContext } from "react";
import { Counter } from "./Counter";
import { List } from "./List";
import { TasksContainer } from "./styles";
import { TasksContext } from "../contexts/TasksContext";

export default function Tasks() {
  const { tasks } = useContext(TasksContext)
  const tasksDone = tasks.reduce((accumulator, task) => {
    if (task.done) {
      accumulator++;
    }
    return accumulator;
  }, 0);

  return (
    <TasksContainer>
      <Counter total={tasks.length} done={tasksDone} />
      <List />
    </TasksContainer>
  );
}
