import { useCallback, useEffect, useRef, useState } from "react";
import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";
import { TodoType } from "../types";
import { getTodos } from "../api/todoAPIs";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";
import { useFetch } from "../hooks/useFetch";

const Todos = () => {
  const [state, refetch] = useFetch(getTodos);

  const todoInput = useRef<HTMLInputElement>(null);
  // const { loading, data, error } = state;

  // const result = useFetch(getTodos);
  // console.log(data);

  return (
    <>
      <h1>My TodoList</h1>
      <TodoInput ref={todoInput} />
      {/* {result && (
        <ul className="flex flex-col">
          {result?.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      )} */}
    </>
  );
};

export default Todos;
