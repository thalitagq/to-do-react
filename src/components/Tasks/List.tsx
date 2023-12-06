
import { useContext } from "react";
import { Item } from "./Item";
import { ListEmptyContainer, TasksList } from "./styles";
import { TasksContext } from "../contexts/TasksContext";
import clipboard from '../../assets/Clipboard.svg'
export function List() {
  const { tasks } = useContext(TasksContext)
  const ListEmpty = (
    <ListEmptyContainer>
      <img src={clipboard} />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </ListEmptyContainer>
  );

  return (
    <TasksList>
      {tasks.length === 0 && ListEmpty}
      {tasks.map((item) => (
        <Item
          description={item.description}
          done={item.done}
          key={item.id}
          id={item.id}
        />
      ))}
    </TasksList>
  );
}
