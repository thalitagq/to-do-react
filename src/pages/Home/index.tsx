import { Header } from "../../components/Header";
import Tasks from "../../components/Tasks";
import { TodoForm } from "../../components/ToDoForm";
import { HomeContainer } from "./styles";

export function Home() {

  return (
    <>
      <HomeContainer>
        <Header/>
        <TodoForm/>
        <Tasks/>
      </HomeContainer>
    </>
  )
}
