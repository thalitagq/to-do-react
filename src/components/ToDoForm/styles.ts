import styled from "styled-components";

export const ToDoFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 46rem;
  margin: auto;
  transform: translateY(-50%);

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-700"]};
    background-color: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    padding: 1rem;
    background-color: ${(props) => props.theme["blue-600"]};
    color: ${(props) => props.theme["gray-100"]};
    font-weight: bold;
    font-size: 0.875rem;
    border-radius: 8px;
    cursor: pointer;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme["gray-100"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;