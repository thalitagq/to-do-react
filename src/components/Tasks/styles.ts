import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const TasksContainer = styled.section`
  width: 46rem;
  margin: 4rem auto 0;
`;

export const TasksCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.56rem;
`;

export const TasksCounterBase = styled.div`
  display: flex;
  gap: 8px;

  span {
    font-weight: bold;
    font-size: 14px;
  }

  span + span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme["gray-200"]};
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const CreatedTasksCounter = styled(TasksCounterBase)`
  span {
    color: ${(props) => props.theme["blue-500"]};
  }
`;

export const DoneTasksCounter = styled(TasksCounterBase)`
  span {
    color: ${(props) => props.theme["pruple-500"]};
  }
`;

export const TasksList = styled.ul``;

interface TaskItemProps {
  checked: boolean;
}

export const TaskItem = styled.li<TaskItemProps>`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  color: ${(props) =>
    props.checked ? props.theme["gray-300"] : props.theme["gray-100"]};
  border-radius: 8px;
  border: 1px solid ${(prosp) => prosp.theme["gray-400"]};
  background: ${(props) => props.theme["gray-500"]};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: ${(props) => (props.checked ? "line-through " : "none")};

  span {
    margin-right: auto;
  }
`;

export const ListEmptyContainer = styled.div`
  display: grid;
  justify-items: center;
  color: ${(props) => props.theme["gray-300"]};
  text-align: center;
  border-top: 1px solid ${(props) => props.theme["gray-400"]};
  padding-top: 4rem;

  img{
    margin-bottom: 1rem;
  }
  
  span {
    font-weight: 700;
  }

  span + span {
    font-weight: 400;
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const CheckBox = styled(Checkbox.Root)`
  display: flex;
  width: 17px;
  height: 17px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  border: 2px solid ${(props) => props.theme["blue-500"]};
  background-color: transparent;

  &[data-state="checked"] {
    border: none;
    color: ${(props) => props.theme["gray-100"]};
    background-color: ${(props) => props.theme["pruple-500"]};
  }

  span {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
