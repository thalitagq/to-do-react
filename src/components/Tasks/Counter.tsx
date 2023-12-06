import { CreatedTasksCounter, DoneTasksCounter, TasksCounterContainer } from "./styles";

interface CounterProps{
  total: number;
  done: number
}

export function Counter({ total, done }: CounterProps) {
  return (
    <TasksCounterContainer>
      <CreatedTasksCounter>
        <span>Tarefas criadas</span>
        <span>{total}</span>
      </CreatedTasksCounter>
      <DoneTasksCounter>
        <span>Concluídas</span>
        <span>
          {done} de {total}
        </span>
      </DoneTasksCounter>
    </TasksCounterContainer>
  );
}
