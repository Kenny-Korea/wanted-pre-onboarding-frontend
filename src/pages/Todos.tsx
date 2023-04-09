import { useCallback, useEffect, useRef, useState } from "react";
import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";
import { TodoType } from "../types";
import { getTodos } from "../api/todoAPIs";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";
import { useFetch } from "../hooks/useFetch";

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[] | null>([]);
  const todoInput = useRef<HTMLInputElement>(null);

  const result: TodoType[] | undefined = useFetch();
  console.log(result);

  return (
    <>
      <h1>My TodoList</h1>
      <TodoInput ref={todoInput} />
      {result && (
        <ul className="flex flex-col">
          {result?.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Todos;
