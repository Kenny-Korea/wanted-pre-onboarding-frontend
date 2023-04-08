import { useEffect, useRef, useState } from "react";
import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";
import { getTodos } from "../api/todoAPIs";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const todoInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const test = async () => {
      const accessToken = getAccessTokenFromLocalStorage();
      return await getTodos(accessToken);
    };
    const abc = test();
    console.log(abc);
  }, []);
  return (
    <>
      <h1>My TodoList</h1>
      <TodoInput ref={todoInput} />
      <ul className="flex flex-col">
        {todos?.map((todo) => (
          <Todo title={todo} key={todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
