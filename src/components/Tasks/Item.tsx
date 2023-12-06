import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckBox, DeleteButton, TaskItem } from "./styles";
import { Check, Trash } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

interface ItemProps{
  id: string
  description: string
  done: boolean
}

export function Item({ description, done, id}: ItemProps) {
  const [checked, setChecked] = useState(done);
  const { updateTask, deleteTask }= useContext(TasksContext)

  const handleChange = (isChecked: boolean) => {
    setChecked(isChecked);
    updateTask({ description, done: isChecked, id });
  };

  return (
    <TaskItem checked={checked}>
      <CheckBox checked={checked} onCheckedChange={handleChange}>
        <Checkbox.Indicator>
          <Check size={12} />
        </Checkbox.Indicator>
      </CheckBox>
      <span>{description}</span>
      <DeleteButton type="button" onClick={() => deleteTask(id)}>
        <Trash size={16} color="#808080" />
      </DeleteButton>
    </TaskItem>
  );
}
