import { useCallback, useEffect, useState } from "react";
import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";
import { getTodos } from "../api/todoAPIs";

export const useFetch = () => {
  const [todos, setTodos] = useState();
  const fetchTodos = useCallback(async () => {
    const accessToken = getAccessTokenFromLocalStorage();
    if (!accessToken) return;
    const todos = await getTodos(accessToken);
    setTodos(todos);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, []);

  return todos;
};
