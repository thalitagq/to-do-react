import { ReactNode, createContext, useState } from "react";

export interface Task {
  id: string;
  description: string;
  done: boolean;
}

interface TasksContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
}

interface TasksProviderPros {
  children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextType);

export function TasksProvider({ children }: TasksProviderPros) {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(task: Task) {
    setTasks((previousState) => [task, ...previousState]);
  }

  function deleteTask(id: string) {
    setTasks((previousState) =>
      previousState.filter((task) => task.id !== id)
    );
  }

  function updateTask(task: Task){
    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return {...item, done: task.done};
      } else {
        return item
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
} 